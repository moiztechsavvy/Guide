using HTTP, Gumbo, Cascadia

const PROTOCOL = "http://"
const DOMAIN = "www.dermnet.com"
const DIR_PAGE = "/dermatology-pictures-skin-disease-pictures"

function fetchpage(url)
    url = buildurl(url)
    response = HTTP.get(url)
    if response.status == 200 && length(response.body) > 0
        content = String(response.body)
    else 
        content = ""
    end
    return Gumbo.parsehtml(content)
end

buildurl(url) = startswith(url, "/") ? PROTOCOL * DOMAIN * url : url

function extract_classes()
    dom = fetchpage(DIR_PAGE)
    table = eachmatch(Selector("table"), dom.root)[1]
    classes = eachmatch(Selector("a[href^='/images/']"), table)
    return Dict(text(c) => extract_subclasses(c.attributes["href"]) for c in classes)
end

function extract_subclasses(url)
    dom = fetchpage(url)
    subclasses = eachmatch(Selector("a[href^='/images/']"), dom.root)
    return Dict(text(s) => extract_images(s.attributes["href"]) for s in subclasses)
end

function extract_images(url)
    dom = fetchpage(url)
    images = eachmatch(Selector("img[src^='$(PROTOCOL * DOMAIN)']"), dom.root)
    return [img.attributes["src"] for img in images]
end

function scrape(ospath)
    classes = extract_classes()
    for (class, subclasses) in classes
        for (subclass, imgurls) in subclasses
            path = mkpath("$ospath/$class/$subclass/")
            for imgurl in imgurls
                try 
                    imgurl = buildurl(imgurl)
                    HTTP.download(imgurl, path)
                catch e
                    println(e)
                end
            end
        end
    end
end