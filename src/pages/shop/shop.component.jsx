import React, { Component } from 'react'
import ShopData from './shop.data.js'

class ShopPage extends Component {
    constructor() {
        super()

        this.state = {
            collections: ShopData
        }
    }

    render() {
        return <div>SHOP PAGE</div>
    }
}

export default ShopPage