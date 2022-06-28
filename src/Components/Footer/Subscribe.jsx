import React from "react";
import "./Subscribe.css";

export default function Subscribe() {
    return (
        <div className="subscribe px-1 px-lg-5 py-4 row m-0 flex-column flex-lg-row align-items-center justify-content-between gap-3 gap-lg-0">
            <div className="subscribe__content col-12 col-lg-10 d-flex justify-content-start align-items-center gap-lg-5 flex-column flex-lg-row gap-3">
                <div className="text text-center text-lg-start text-lg-start d-flex flex-column gap-2" >
                    <h5 className="m-0 fw-bold text-uppercase">Subscribe Newsletter</h5>
                    <p className="lead m-0 fs-6">
                        Get all the latest information on Events, Sales and Offers.
                    </p>
                </div>
                <form action="" className="d-flex mw-100 flex-column flex-sm-row ">
                    <input type="text" className="border-0 rounded-0" placeholder="Email Address" name="email_address" />
                    <button className="btn btn-dark rounded-0 h-100">Subscribe</button>
                </form>
            </div>
            <div className="subscribe__icons col-12 col-md-2 d-flex justify-content-center justify-content-lg-end gap-2">
                <a className="icon" href="https://www.facebook.com/mahmoudmekiii" target={"_blank"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path></svg>
                </a>
                <a className="icon" href="https://github.com/MahmoudMeky" target={"_blank"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"></path></svg>
                </a>
                <a className="icon" href="http://wa.me/+201010595485" target={"_blank"}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" clip-rule="evenodd" d="M18.403 5.633A8.919 8.919 0 0 0 12.053 3c-4.948 0-8.976 4.027-8.978 8.977 0 1.582.413 3.126 1.198 4.488L3 21.116l4.759-1.249a8.981 8.981 0 0 0 4.29 1.093h.004c4.947 0 8.975-4.027 8.977-8.977a8.926 8.926 0 0 0-2.627-6.35m-6.35 13.812h-.003a7.446 7.446 0 0 1-3.798-1.041l-.272-.162-2.824.741.753-2.753-.177-.282a7.448 7.448 0 0 1-1.141-3.971c.002-4.114 3.349-7.461 7.465-7.461a7.413 7.413 0 0 1 5.275 2.188 7.42 7.42 0 0 1 2.183 5.279c-.002 4.114-3.349 7.462-7.461 7.462m4.093-5.589c-.225-.113-1.327-.655-1.533-.73-.205-.075-.354-.112-.504.112s-.58.729-.711.879-.262.168-.486.056-.947-.349-1.804-1.113c-.667-.595-1.117-1.329-1.248-1.554s-.014-.346.099-.458c.101-.1.224-.262.336-.393.112-.131.149-.224.224-.374s.038-.281-.019-.393c-.056-.113-.505-1.217-.692-1.666-.181-.435-.366-.377-.504-.383a9.65 9.65 0 0 0-.429-.008.826.826 0 0 0-.599.28c-.206.225-.785.767-.785 1.871s.804 2.171.916 2.321c.112.15 1.582 2.415 3.832 3.387.536.231.954.369 1.279.473.537.171 1.026.146 1.413.089.431-.064 1.327-.542 1.514-1.066.187-.524.187-.973.131-1.067-.056-.094-.207-.151-.43-.263"></path></svg>
                </a>
            </div>
        </div>
    );
}
