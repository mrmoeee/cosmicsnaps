import React from 'react';


export default class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      photoFile: null,
      photoUrl: null
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  componentDidMount() {
    this.props.requestAllPictures();
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
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('picture[title]', this.state.title);
    formData.append('picture[description]', this.state.description);

    if (this.state.photoFile) {
      formData.append('picture[photo]', this.state.photoFile);
    }

    this.props.createPic(formData);
  }

  render () {
    console.log(this.state);
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl}/> : null;
    return (
      <form onSubmit={this.handleSubmit}>
        <label >
          Title:
        </label>
        <input
          type="text"
          id="title-body"
          value={this.state.title}
          onChange={this.handleInput('title')}
          />

        <label >
          Description:
        </label>
        <textarea
          id="description-body"
          value={this.state.description}
          onChange={this.handleInput('description')}>
        </textarea>

        <input
          type="file"
          onChange={this.handleFile}
          />
        <h3>Image Preview</h3>
        {preview}
        <button>Upload a picture</button>
      </form>
    );
  }
}
