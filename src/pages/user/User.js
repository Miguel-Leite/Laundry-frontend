import { useState } from 'react';
import { Wrapper } from '../../components/Wrapper';
import { BlocTabs, ContentTabs } from './styles';


export const User = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (key) => {
        setToggleState(key)
    }
    return (
        <div>
            <Wrapper />
            <div className='container'>
                <div className="wrapper-content">
                    <div className='container'>
                        <BlocTabs>
                            <div className={toggleState === 1? 'tabs active-tabs' : 'tabs'} onClick={()=>toggleTab(1)}>Listar usuarios</div>
                            <div className={toggleState === 2? 'tabs active-tabs' : 'tabs'} onClick={()=>toggleTab(2)}>Adicionar usuarios</div>
                            <div className={toggleState === 3? 'tabs active-tabs' : 'tabs'} onClick={()=>toggleTab(3)}>Usuarios administradores</div>
                        </BlocTabs>
                        <ContentTabs>
                            <div className={toggleState === 1? 'tab active-tab' : 'tab'}>
                                <h1>Tab 1</h1>
                            </div>
                            <div className={toggleState === 2? 'tab active-tab' : 'tab'}>
                                <h1>Tab 2</h1>
                            </div>
                            <div className={toggleState === 3? 'tab active-tab' : 'tab'}>
                                <h1>Tab 3</h1>
                            </div>
                        </ContentTabs>
                    </div>
                </div>
            </div>
        </div>
    )
}