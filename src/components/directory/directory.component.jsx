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
                                this.state.sections.map(function({id, ...OtherSectionProps}) {
                                        return(
                                                <MenuItem 
                                                        key={id} {...OtherSectionProps}
                                                />
                                        );
                                })
                        }
                        </div>
                );
        }

}

export default Directory;