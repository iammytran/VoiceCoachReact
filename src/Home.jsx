
import React from "react";
import MainFunction from "./MainFunction";

//index.razor in Blazor
function Home() {
    return (
        <div className="home">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <h1>AI Voice Coach</h1>
                        <br></br><br></br>
                        <form action="./mainfunction">
                            <input type="submit" value="Try Our Product"></input>
                        </form>
                    </div>
                    <br></br><br></br><br></br><br></br>
                </div>
            </div>
        </div>
    );
}

export default Home;