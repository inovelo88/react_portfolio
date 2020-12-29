import React from "react";


const Box1 = () => {
    return (

        <div className="box-container">
            <div className="flip-card">
                <div className="flip-inner">
                    <div className="flip-card-front">
                        <h3>Note Taking App</h3>
                        <p> A note taking application that can be used to write, save, and delete notes. This
							application uses an express backend and saves and retrieves note data from a JSON file.</p>
                            <div class="flip-card-back">
						<img src="notetaker.jpg" alt="Note Taker" style={{width:"300px"}} style={{height:"300px"}}/>
						<a href="https://guarded-meadow-02213.herokuapp.com" target="_blank">Click here to
							View</a>
					</div>
                    </div>

                </div>
            </div>
            
        </div>



    )
}

export default Box1