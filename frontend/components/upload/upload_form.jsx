import React from 'react';


export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.picture;

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.resetFields = this.resetFields.bind(this);
  }


  handleInput(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({photoFile: file, photoUrl: fileReader.result});
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
    // const hide = document.getElementById('unhide');
    // hide.style.display = "flex";
    // const boxxy = document.getElementById('upload-link-boxxy');
    // boxxy.style.height = "40px";
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('picture[title]', this.state.title);
    formData.append('picture[description]', this.state.description);

    if (this.state.photoFile) {
      formData.append('picture[photo]', this.state.photoFile);
    }
    if (this.state.id) {
      this.props.action(formData, this.state.id).then(() => {
        const modal = document.getElementById('boxxyy');
      }).then(this.props.modalClose())
      .then(document.getElementById('formmy').reset());
    } else {
      console.log('this',this);
      this.props.action(formData).then(() => {
        const modal = document.getElementById('upload-modal');
      }).then(this.props.modalClose());
    }


    this.resetFields();
  }



  resetFields() {
    // this.setState({
    //   title: "",
    //   description: "",
    //   photoFile: null,
    //   photoUrl: null
    // });
    // const hide = document.getElementById('unhide');
    // hide.style.display = "none";
    // const boxxy = document.getElementById('upload-link-boxxy');
    // boxxy.style.height = "100%";
  }

  render () {

    let fullPath = document.getElementById('upload');
    if (fullPath) {
      fullPath = fullPath.value;
      let startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
      let filename = fullPath.substring(startIndex);
      if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
        filename = filename.substring(1);
      }
      fullPath = filename;
    }
    let uploadLinkBoxxy;
    let hide;
    // const style =
    if (this.state.photoUrl === null) {
      // const hide = document.getElementById('unhide');
      // hide.style.display = "flex";
      uploadLinkBoxxy = <div className="upload-link-box" id="upload-link-boxxy">
        <div className="label-box">
          <label className="upload-label">
            <span>Select a file</span>
            <input
              id="upload"
              type="file"
              onChange={this.handleFile}
              />
          </label>
        </div>
      </div>;
      // const boxxy = document.getElementById('upload-link-boxxy');
      // boxxy.style.height = "40px";
    } else {
      uploadLinkBoxxy = <div className="upload-link-box" id="boxxyy">
        <div className="label-box">
          <label className="upload-label">
            <span>Select a file</span>
            <input
              id="upload"
              type="file"
              onChange={this.handleFile}
              />
          </label>
        </div>
      </div>;
    }
    console.log('boxxxyxyxyxyyx', uploadLinkBoxxy);

    const preview = this.state.photoUrl ? <img className="prev-img" src={this.state.photoUrl}/> : null;
    return (
      <form onSubmit={this.handleSubmit} className="form" id="formmy">
        <p onClick={this.props.modalClose} className="close">x</p>

        {uploadLinkBoxxy}
        <div className="filename-box">
          {fullPath ? `Filename: ${fullPath}` : 'File not yet chosen'}
        </div>

        <div id="unhide" className="hidden-content">
          <div className="preview-container">
            {preview}
            <div className="preview-text">
              <h3>Image Preview</h3>
            </div>
          </div>
          <div className="form-input-container">
            <ul className="form-list">
              <li className="title-list">
                <label >
                  Title:
                </label>
                <div className="title-box">
                  <input
                    type="text"
                    id="title-body"
                    value={this.state.title}
                    onChange={this.handleInput('title')}
                    />
                </div>
              </li>
              <li className="description-list">
                <label >
                  Description:
                </label>
                <div className="description-box">
                  <textarea
                    id="description-body"
                    value={this.state.description}
                    onChange={this.handleInput('description')}>
                  </textarea>
                </div>
              </li>
              <li className="upload-btn">
                <button className="butt">Click to upload</button>
              </li>
            </ul>
          </div>
        </div>
      </form>
    );
  }
}
