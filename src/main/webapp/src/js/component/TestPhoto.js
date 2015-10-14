/**
 * Created by azibit on 9/23/15.
 */

var React = require('react')

var TestPhoto = React.createClass({
    getInitialState: function() {
        return {liked: false,
        count : 1};
    },
    handleClick: function(event) {
        this.setState({liked: !this.state.liked});
    },

    btnHandle : function(event){
        this.setState({
            count: this.state.count + 1
        });
    },

    render: function() {
        var text = this.state.liked ? 'like' : 'haven\'t liked';
        var btnText =  this.state.count;
        return (
            <div>
            <p onClick={this.handleClick}>
                You {text} this. Click to toggle.
            </p>
                <p onClick = {this.btnHandle}>{btnText}</p>

                </div>
        );
    }
});

module.exports = TestPhoto;
