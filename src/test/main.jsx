import React from 'react';
import { Button, Icon } from 'antd-mobile';

class Test extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'ant mobile test';
    }
    render() {
    	const style1 = {maxWidth: '375px', height: '667px', padding: '10px'};
    	const style2 = { margin: '32px 0' };
        return (
        	<div className="contaier" style={style1}>
        		<div style={style2}>
        			<Button>default 按钮</Button>
        		</div>
        		
        		<div style={style2}>
        			<Button type="warning">warning 按钮</Button>
        		</div>

        		<Icon type="link" />
        		<Icon type="right" />
        		<div style={style2}>
        			<Button loading>loading 按钮</Button>
        		</div>
        		
        		
        		<div style={style2}>
        			<Button type="primary">primary按钮</Button>
        		</div>
        	</div>
        );
    }
}

export default Test;