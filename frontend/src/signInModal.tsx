
import React from "react";

function _signInModal() {
    return(
    <div>
        <div className="modal fade popupmodel" id="signin" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
        </div>

            <div className="modal modal-top fade" id="confirmationModel" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-content-inner">
                            <div className="modal-body">
                                <div className="modal-body-inner text-center">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <h3 className="modal-heading">Confirmation</h3>
                                    <p id="confirmText"></p>
                                    <button type="button" className="btn btn-red uppercase" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" id="btnDelete">Confirm</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal modal-top fade" id="AlertModel" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-content-inner">
                            <div className="modal-body">
                                <div className="modal-body-inner text-center">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                                    <h3 className="modal-heading">Message</h3>
                                    <p id="messageText"></p>
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">OK</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal modal-top fade" id="ProceedModel" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="static">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-content-inner">
                            <div className="modal-body">
                                <div className="modal-body-inner text-center">
                                    <h3 className="modal-heading" id="proceedHeading"></h3>
                                    <p id="proceedText"></p>
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal" id="btnProceed">Proceed</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>

    )
};
export default _signInModal;
