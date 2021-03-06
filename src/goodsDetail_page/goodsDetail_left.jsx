import React, {Component} from 'react';
import './goodsDetail_left.css'
import GoodsDetailLeftLi from './goodsDetail_left_li'
import lay_1 from './goodsDetail_img/lay_1.png'
import lay_2 from './goodsDetail_img/lay_2.png'
import lay_3 from './goodsDetail_img/lay_3.png'

var msg = [
    {
        'key': 0,
        'img_src': lay_1
    }, {
        'key': 1,
        'img_src': lay_2
    }, {
        'key': 2,
        'img_src': lay_3
    }
]

class GoodsDetailLeft extends Component {

    state = {
        topImg: lay_1
    }

    handleMouseOver_(e) {
        this.setState({
            topImg:e,
        })
    }

    mapLi = () => {
        return msg.map( (v)=> {
            return (<GoodsDetailLeftLi
                handleMouseOver_={(e) => this.handleMouseOver_(e)}
                liClassName={this.state.liClassName}
                key={v.key}
                img_src={v.img_src}/>)
        })
    }

    render() {
        return (
            <div className='goods-detail-left'>
                <div className='top'><img src={this.state.topImg} alt=""/></div>
                <div className='bottom'>
                    <ul>
                        {this.mapLi()}
                        {/* <li className={this.state.liClassName}>
                            <div className='pic'>
                                <a
                                    href=""
                                    className='pic-a'
                                    onMouseOver={this.handleMouseOver}>
                                    <img src={lay_1} alt=""/>
                                </a>
                            </div>
                        </li> */}
                    </ul>
                </div>
            </div>
        );
    }
};

export default GoodsDetailLeft;