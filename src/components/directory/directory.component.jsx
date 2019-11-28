import React, { Component } from 'react'

import './directory.styles.scss'

import MenuItem from '../menu-item/menu-item.component'

class Directory extends Component {
    constructor() {
        super()

        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shops/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shops/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shops/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shops/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/mens.png',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shops/mens'
                },
            ]
        }
    }

    render() {
        return (
            <div className="directory-menu">
                {   
                    this.state.sections.map(({ id, ...otherSectionProps }) => (
                        <MenuItem key={ id } {...otherSectionProps} />
                    ))
                }
            </div>
        )
    }
}

export default Directory