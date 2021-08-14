import CheckBox from "./check-box";

function ProsCons({ pros, cons }) {
    return (
        <>
            <div className="row">
                <div className="left-25">
                    <label htmlFor="name">Name</label>
                </div>
                <div className="right-75">
                    <input type="text" aria-describedby="Template name" id="name" name="name" placeholder="Enter Name">
                    </input>
                </div>
            </div>
            <div className="row">
                <div className="right-75">
                    <h2>Pros</h2>
                </div>
            </div>
            {pros.map((pro, index) =>
                <CheckBox
                    key={index}
                    id={index}
                    text={pro} />
            )
            }
            <div className="row">
                <div className="right-75">
                    <h2>Cons</h2>
                </div>
            </div>
            {cons.map((con, index) =>
                <CheckBox
                    key={index}
                    id={index}
                    text={con} />
            )
            }
        </>
    )
}

export default ProsCons
