import './App.css';

import { NavBar} from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import React from 'react';

import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Categoriabar from './components/Categoriabar/Categoriabar';

function App() {


  return (
    <div >
    <BrowserRouter >
    <NavBar/>
    <Categoriabar/>

    <Routes>
        <Route path='/'element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>}  />
        <Route path='/productos' element={<ItemListContainer/>} />
        <Route path='/productos/:categoria' element={<ItemListContainer/>} />

    </Routes>


    </BrowserRouter>
    </div>
  );
}

export default App;



{/* by @DANARQUIO 
MMMMMMMMMMMMMMMMMMMMWX0xoc;'..          ..';coxOXWMMMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMWKkl;..                         .;lxKWMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMWKd;.                     ',           .;d0NMMMMMMMMMMMMM
MMMMMMMMMMMXx:.                       ,Od.             .;xXWMMMMMMMMMM
MMMMMMMMMXd'                         ;0Wd.                'oKWMMMMMMMM
MMMMMMMXd'                    .,. .,oXMNl ..,;cloooooolc:;'.'oXMMMMMMM
MMMMMWO,                     ;d;.c0NWMMNOx0XNWMMMMMMMMWKko:.  ,kNMMMMM
MMMMXo.               .'''';xKkd0WMMMMMWMMMMMMMMMMMMMMWNX0Oxo:,,oXMMMM
MMMK:                'xXXXXWMWNWMMMMWNXNWMWWMMMMWWWNNNNNNWWMMMNKOKWMMM
MMK:                :ONMMMMMMWWMMWXK0KNWMWkxKklc:;,'''''',;cldOKWMMMMM
MX:                '0MMMMMMMKkXMN00KXMMMMXc';.                .;kNMMMM
No.               ,OWMMMMNkl,cKKOKWMMMMMNo.                    .,lONMM
O.                ,0WMMW0c'.;xkONMMMMMMMk..:l;.                    'oK
c                .;kWNK0kdxxxk0WMMMMMMMWkdKWk.    .;ldxkkkdl;.       :
'             .:kXNMMWNXK000XWMMMMMMMMMMWWMWx..'lOXWMMNOoc;;,.       .
.          .';OWMMMMMMMMMMMMMMMMMMWNXNMWKk0WWXKNMMWNKx;.              
       .':xKKXWMMMMMMMMMMMMMMMMWN0kk0NNXKooXMMMWNKkdoc;,.             
     .ckXNXXXWMMMMMWWNNNNXXXKOxodkXWWMWWN0dkWMN0dollxxOXXkl'          
    .okd0XNWMWX0kdl:,'''....':dONMMMMMMKd0KONKdolcldOOkOKNWNx'        
.    .ckNMWX0o,.          .lONMMMMMMMMXc;kOdo:'',,;lxOKXWMMMMK:      .
;      ;kKOd;.  .''..   'oKWMMMMMMMMWK:..'.        .'oKMMMMMMMK,     ,
d.      .;:.  .::'    .lKMMMMMMMMWKOo'                ,kWMMMMMWo    .o
K;           ,l;...,,c0WMMMMMMN0d:.                    'OMMMMMWd.   ,K
WO.        .od,'cx0XNWMMMNKko:'.                        cNMMMMNl   .kW
MWx.    .,oOd. .oXWMMMW0l'.                             ;KMMMMO'  .dWM
MMWx. ..:do,     'lk0K0;                                cNMMMK;  .dNMM
MMMWk'              ...                                'OMMMK:  .xWMMM
MMMMM0:.                                              'kWMNk'  ;0WMMMM
MMMMMMNx'                                            :0WNO:. 'dXMMMMMM
MMMMMMMMXo'                                        ,xXXx;. .oKWMMMMMMM
MMMMMMMMMWXd,.                                  .;dOxc.  ,dKWMMMMMMMMM
MMMMMMMMMMMMNOl'                             ..;cc;.  .ckNMMMMMMMMMMMM
MMMMMMMMMMMMMMWXOl;.                         ...  .,lkXWMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMWKko:,..                  ..':okKNMMMMMMMMMMMMMMMMMM
MMMMMMMMMMMMMMMMMMMMMMWX0xl:'..        ..';lx0XWMMMMMMMMMMMMMMMMMMMMMM */}