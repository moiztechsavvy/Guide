using HTTP, Gumbo, Cascadia
using DelimitedFiles

const PROTOCOL = "http://"
const DOMAIN = "www.dermnet.com"
const DIR_PAGE = "/dermatology-pictures-skin-disease-pictures"

function buildurl(url)
    url = replace(url, r"\s" => "%20")
    startswith(url, "/") ? PROTOCOL * DOMAIN * url : url
end

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

function extract_classes()
    dom = fetchpage(DIR_PAGE)
    table = eachmatch(Selector("table"), dom.root)[1]
    classes = eachmatch(Selector("a[href^='/images/']"), table)
    return Dict(text(c) => c.attributes["href"] for c in classes)
end

function extract_subclasses(url)
    dom = fetchpage(url)
    subclasses = eachmatch(Selector("a[href^='/images/']"), dom.root)
    return Dict(text(s) => s.attributes["href"] for s in subclasses)
end

function extract_images(url)
    dom = fetchpage(url)
    images = eachmatch(Selector("img[src^='$(PROTOCOL * DOMAIN)']"), dom.root)
    return [(img.parent.attributes["name"], img.attributes["src"]) for img in images]
end

function scrape(ospath)
    io = open(joinpath(ospath, "dataset.csv"), "w")

    for (class, class_url) in extract_classes()
        class = replace(class, r"\s*photos"i => "")
        for (subclass, subclass_url) in extract_subclasses(class_url)
            subclass = replace(subclass, r"\s*photos"i => "")
            for (img, img_url) in extract_images(subclass_url)
                try 
                    HTTP.download(buildurl(img_url), ospath)
                    writedlm(io, [img class subclass], ",")
                catch e
                    @warn(e)
                end
            end
        end
    end
    
    close(io)
end