import '../index.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const Header = props => <>
    <div id="header">
        <Link to={ `/` }>Store</Link>
    </div>
</>