import React, {Component} from 'react';
import './directory.styles.scss';
import sections from './directory.data';
import MenuItem from '../menu-item/menu-item.component';

class Directory extends Component {
        constructor(props){
                super(props);

                this.state = {
                        sections: sections
                }
        }

        render(){
                return(
                        <div className="directory-menu">
                        {
                                this.state.sections.map(function({id, title, imageUrl, size}) {
                                        return(
                                                <MenuItem 
                                                        key={id}
                                                        title={title}
                                                        imageUrl = {imageUrl}       
                                                        size = {size} 
                                                />
                                        );
                                })
                        }
                        </div>
                );
        }

}

export default Directory;