import React from 'react';

const Config = () => {
    return (
        <div className="row">
        <div className="input-group mb-3 mt-3 col-md-6 ">
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroupFileAddon01">Upload</span>
            </div>
            <div className="custom-file">
                <input type="file" className="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01" />
                <label className="custom-file-label" for="inputGroupFile01">Choose file</label>
            </div>
        </div>
        </div>
    )
}

export default Config;