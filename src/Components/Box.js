import React from "react";


const Box = (props) => {
	console.log(props)
    return (
<div className="flip-card">
				<div className="flip-card-inner">
					<div className="flip-card-front">
						<h3>{props.title}</h3>
						<p> {props.description}
						</p>

					</div>
					<div className="flip-card-back">
						<img src={props.image} alt="Work Day Scheduler" style={{width:"300px", height:"300px"}}/>
						<a href={props.demoLink} target="_blank" rel="noreferrer">Click here to
							View</a>
                            <p>{props.keyword}</p>
					</div>
				</div>
			</div>


    )
}

export default Box