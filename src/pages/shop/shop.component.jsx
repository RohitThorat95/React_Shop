import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'

import './shop.styles.scss';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { selectCollections } from '../../redux/shop/shop.selectors';

const ShopPage = ({ collections }) => (
    <div className='shop-page'>
        {
            this.state.collections.map(({ id, title, routeName, items }) => (
                <CollectionPreview key={id} title={title} items={items} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(ShopPage);