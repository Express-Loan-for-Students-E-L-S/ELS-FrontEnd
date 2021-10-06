import React from 'react'
import Navbar from './Navbar'
import { Collapse, Button } from 'antd';
import { ListItem } from '@mui/material';
import { List } from 'rc-field-form';
import { ListItemIcon, ListSubheader ,ListItemText} from '@mui/material';
import { ExpandLess,ExpandMore } from '@material-ui/icons';
const { Panel } = Collapse;


function FAQ() {
    const [selectedIndex, setSelectedIndex] = React.useState("")

    const handleClick = index => {
        if (selectedIndex === index) {
        setSelectedIndex("")
        } else {
        setSelectedIndex(index)
        }
    }
    const drawerMenuItemData=[
        {author: "Pete Hunt", text: "This is one comment"},
        {author: "Jordan Walke", text: "This is *another* comment"}
      ];
    return (
        <div>
            <Navbar/>
            <div className="box">
                <div className="container">
                <h4>Frequently Asked Questions</h4>
                
                <div id="faq" className="block faqBlock">
                    <div className="container-fluid">
                        <Collapse defaultActiveKey={['1']} style={{paddingTop:'2rem'}}>
                        <Panel header="How to setup the theme?" key="1" >
                            <p style={{backgroundColor:'#FFFFFF',padding:"1rem"}}>Ut per tempor latine fuisset, cu quod posidonium vix. Mei cu erant bonorum, te ius vide maiorum hendrerit. In alii instructior vix, vis et elit maluisset, usu recusabo atomorum ut. Nibh diceret dolores vix et, id omnis adhuc maiestatis vim, ei mel legendos mnesarchum argumentum. Semper nusquam urbanitas sea te.</p>
                        </Panel>
                        <Panel header="Can I change plan or cancel at any time?" key="2">
                            <p style={{backgroundColor:'#FFFFFF',padding:"1rem"}}>Postea ceteros corrumpit ius te, eos epicuri intellegebat consequuntur et. Sint quot suscipiantur ea nam. Nam pericula evertitur ut, per et quod nostro, autem augue id has. Virtute epicurei quo te, pri et novum essent senserit.</p>
                        </Panel>
                        <Panel header="How to access through cloud?" key="3">
                            <p style={{backgroundColor:'#FFFFFF',padding:"1rem"}}>Eu veritus ancillae suavitate per, cum in appellantur efficiantur. Eum cu clita ponderum lobortis, usu dicat exerci et, eam alii oblique interesset ea. Suas quidam volumus id eam, id populo euripidis temporibus pri. At eum quas putent iriure, fugit tritani sed ad. Per ad magna possim aliquam, est aeque exerci verear an, qui cu modus audire detraxit. Duo ne nostro rationibus, nam mutat omittam evertitur ad, meliore gubergren voluptatum at mel.</p>
                        </Panel> 
                        <Panel header="Can I manage multiple task?" key="4">
                            <p style={{backgroundColor:'#FFFFFF',padding:"1rem"}}>Mentitum offendit appareat nam ex, mea timeam nonumes pertinacia ne. Autem altera an vix, cu soluta aliquid pro, ne sit natum neglegentur. Ea ridens iudicabit eam, in dico appetere mediocrem nec. Sea idque consetetur no. Sonet minimum ex eam, vis an semper consequuntur definitionem. Vel legimus nostrum hendrerit eu, ea velit facete nec.</p>
                        </Panel>
                        <Panel header="How can I change my password?" key="5">
                            <p style={{backgroundColor:'#FFFFFF',padding:"1rem"}}>Usu dolorem ceteros te. Veri exerci ne vix, modo ignota an qui. Ne oblique antiopam quo. Ex quem saepe cum, temporibus comprehensam qui at. Aliquip habemus fierent qui at. No facete omnesque argumentum sea, est tale error nihil ad.</p>
                        </Panel>
                        <Panel header="How to manage my account?" key="6">
                            <p style={{backgroundColor:'#FFFFFF',padding:"1rem"}}>Erant vitae alterum in mel, viris rationibus argumentum eu sea. Per ei diceret constituto, ei qui simul intellegam, ut eos dolor ceteros. Altera contentiones et eam. Discere alienum intellegat te duo. Erat dissentiet ei sed, eius dicat ne eum. Id tation everti nam, quo cu magna possit patrioque.</p>
                        </Panel>
                        </Collapse>
            
                    </div>
                    </div>  
                                

            </div>
                
           
            

            
        </div>
      </div>  
    )
}

export default FAQ
