
// npimport { Fragment, useState } from "react";
import type { MouseEvent } from "react";




interface ProjectItemDescription {
    title: string;
    description: string[];
    githubLink: string;
    otherLink: string;

}

function SingleProjectItem({ title, description, githubLink = "fat", otherLink = "soy" }: ProjectItemDescription) {
    function handleMouseOver(event: MouseEvent) {
        console.log("Mouseover: ", event)
    }
    return (
        <>
            <li className="container bg-secondary p-2 my-2 rounded list-unstyled border border-danger" onMouseOver={handleMouseOver}>
                <div className="d-flex align-items-center">
                    <div className="me-auto p-2  rounded bg-success flex-grow-1">
                        <h5 className="mx-2 fw-bold">{title}</h5>
                        <ul className="">
                            {description.map((item, index) => (
                                <li className="" key={index}> {item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="ms-auto p-3 rounded bg-success d-flex flex-column align-items-end">
                        <p>Github: {githubLink}</p>
                        <p>OtherLink: {otherLink}</p>

                    </div>

                </div>

            </li>

        </>
    );
}

const AlignedContent = ({ title, description, githubLink = 'hey', otherLink = 'soy' }: ProjectItemDescription) => {
    return (
        // The parent 'd-flex' container enables flexbox behavior.
        // 'align-items-center' vertically centers the content.
        <div className="d-flex align-items-center border p-3 rounded">
            {/* This div is pushed to the left by 'mr-auto' */}
            <div className="me-auto p-2">
                <h5 className="mx-2 fw-bold">{title}</h5>
                <ul className="list-unstyled"> {/* 'list-unstyled' removes bullet points */}
                    {description.map((item, index) => (
                        <li key={index}> {item}</li>
                    ))}
                </ul>
            </div>

            {/* This div is pushed to the right by 'ms-auto' */}
            {/* 'd-flex flex-column align-items-end' stacks the paragraphs and aligns them to the right. */}
            <div className="ms-auto p-2 bg-success text-white rounded d-flex flex-column align-items-end">
                <p className="mb-0">Github: {githubLink}</p>
                <p className="mb-0">OtherLink: {otherLink}</p>
            </div>
        </div>
    );
};


// probably add like some container to hold the single project items



function ProjectsContainer() {
    const projExample = {
        title: "soy",
        description: ['yeah', 'chair'],
        githubLink: "pls make this look less ugly",
        otherLink: "please do above",
    };

    return (
        <> {/*remove bg-info later*/}
            <div className="bg-info row p-2">
                <div className="bg-secondary col-lg-4 align-self-center rounded ">
                    <h2>Projects</h2>
                    <p><a className="link-danger link-opacity-100" href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank">
                        View All Projects{' ->'}</a>
                    </p>

                </div>
                <div className="col-lg-8 align-self-center py-3">
                    <SingleProjectItem
                        {...projExample}
                    />
                    <AlignedContent {...projExample}/>
                    <p>2 of 2</p>
                    <p>2 of 2</p>
                    <p>2 of 2</p>
                </div>

            </div>
        </>

    );
}

export default ProjectsContainer;