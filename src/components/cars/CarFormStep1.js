import React from "react";
import CarEditForm from "./CarEditForm";

const AddFormStep1 = (props) => {
    return (
        <form>
            <fieldset>
                <div className="addCarFormStep1">
                    <input
                    type="text"
                    required
                    onChange={handleFieldChange}
                    id="brandName"
                    />
                </div>
            </fieldset>
        </form>
    )
}