import './App.css';
import { FaSearch } from 'react-icons/fa'
import { FaRegBell } from 'react-icons/fa'
import { FaReact} from 'react-icons/fa'

function App() {
  return (
    <div className='container'>
      <header>
        <FaSearch  className='icon'/>
        <p className='logo'><FaReact />React App</p>
        <FaRegBell className='icon'/>
      </header>
      <main>
        <h3>Earnings</h3>
        <table>
          <tbody>
            <tr>
              <td>Total Plan Value</td>
              <td>$300</td>
            </tr>
            <tr>
              <td>Referral Commission</td>
              <td>$0</td>
            </tr>
          </tbody>
          <tbody>
            <tr>
              <td>Today's Profit</td>
              <td>$0.018</td>
            </tr>
            <tr>
              <td>Total Amount</td>
              <td>$600</td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}

export default App;
