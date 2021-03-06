import React, {Component} from 'react';
import './minePage_model.css'
import PropTypes from 'prop-types'
import {message} from 'antd'

import BasicDetailModel from './basicDetail_model'
import AvatarModel from './avatar_model'
import AddressModel from './address_model'

import TitleItem from './minePage_title_item'

const titles = [
    {
        'key':0,
        'id':0,
        'titleName':'基本资料',
        'aClassName':'a-active',
    },{
        'key':1,
        'id':1,
        'titleName':'个人头像',
        'aClassName':'a'
    },{
        'key':2,
        'id':2,
        'titleName':'我的地址',
        'aClassName':'a'
    }
];

class MinePageModel extends Component {
    static propsTypes = {
        perCenPageModel : PropTypes.any
    }

    state={
        content:0
    }

    componentWillMount(){
        this.props.perCenPageModel ? this.props.perCenPageModel.liActive('mine') : message.info("发生了未知的错误！")        
    }

    handleClick(e){
        titles.forEach((v,i)=>{
			if(this.refs[`mineItem${i}`].state.id===e){
				this.refs[`mineItem${i}`].aFocus()
            }else{
                this.refs[`mineItem${i}`].aUnFocus()
            }
        })
        this.setState({
            content:e
        })
    }

    mapMineTitleItem=()=>{
        return titles.map((v,i) => {
            return (
                <TitleItem
					key={v.key}
					titleName={v.titleName}
					aClassName={v.aClassName}
					id={v.id}
					ref={`mineItem${i}`}
                    handleClick={(e)=>this.handleClick(e)}
					></TitleItem>
            )
        })
    }

    render() {
        const firstContent = (
            <BasicDetailModel />
        )

        const secondContent = (
            <AvatarModel/>
        )

        const thirdContent = (
            <AddressModel/>
        )

        const components=[firstContent,secondContent,thirdContent]

        return (
            <div className='mine-page-model'>
                <div className="mine-title">个人资料</div>
                <div className="mine-nav">
                    <ul>
                        {this.mapMineTitleItem()}
                    </ul>
                </div>
                <div className='mine-center'>
                    {components[this.state.content]}
                </div>
            </div>
        );
    }
};

export default MinePageModel;