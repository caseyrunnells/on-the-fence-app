class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility: false
        };
    }
    handleToggleVisibility() {
        this.setState((prevState) => {
            return {
              visibility: !prevState.visibility  
            };
        });
    }
    render() {
        return (
                <div>
                    <h1>Visibility Toggle</h1>
                    <button onClick={this.handleToggleVisibility}>
                        {this.state.visibility ? 'Hide details' : 'Show details'}
                    </button>
                    {this.state.visibility && (
                        <p>Here are the details of this App! Their visibility is toggled by clicking on the "Show Details" button above.</p>
                    )}
                </div>
            );
    }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));









