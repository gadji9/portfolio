import { FunctionComponent } from "react";
import "./index.css";

const Cat: FunctionComponent = () => {
    return (
        <>
            <div className="main">
                <span className="stand"></span>
                <div className="cat">
                    <div className="body"></div>
                    <div className="head">
                        <div className="ear"></div>
                        <div className="ear"></div>
                    </div>
                    <div className="face">
                        <div className="nose"></div>

                        <div className="whisker-container">
                            <div className="whisker"></div>
                            <div className="whisker"></div>
                        </div>
                        <div className="whisker-container">
                            <div className="whisker"></div>
                            <div className="whisker"></div>
                        </div>
                        <div className="cat-eye-container">
                            <div className="cat-eye"></div>
                            <div className="cat-eye"></div>
                        </div>
                    </div>
                    <div className="tail-container">
                        <div className="tail">
                            <div className="tail">
                                <div className="tail">
                                    <div className="tail">
                                        <div className="tail">
                                            <div className="tail">
                                                <div className="tail"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Cat;
