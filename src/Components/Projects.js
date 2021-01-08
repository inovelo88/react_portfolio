import React, {Component} from "react";
import ProjectList from "../ProjectList.json";
import Box from "./Box";

class Projects extends Component{
    state = {
    
        ProjectList
    }
    render () {

 
    return (
        <div className="projects">
            <div className="projects-text ">
                <p>Projects</p>
                <p>Below are three projects created using HTML, CSS, JavaScript, Node and React.</p>
            </div>
            <div className="box-deck">
            {this.state.ProjectList.map(project => (
                <Box title={project.title}
                    id={project.id}
                    description={project.desc}
                    image={project.image}
                    demoLink={project.demoLink}
                    keyword={project.keywords}
                />
            ))}
            </div>
        </div>
    )
}
}

export default Projects