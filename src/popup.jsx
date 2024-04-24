import React from 'react';
import { render } from 'react-dom';
import { Header, Icon, Dropdown, TableRow,
    TableHeaderCell,
    TableHeader,
    TableCell,
    TableBody,
    Table, Label,Container} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './popup.css';

class WalletFeatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 4000,
      transactions: [
        { id: 1, from: '0x123...', to: '0x456...', date: '2022', amount: '100' },
        { id: 2, from: '0x789...', to: '0xabc...', date: '2022', amount: '200' },
        { id: 3, from: '0x123...', to: '0x456...', date: '2022', amount: '100' },
        { id: 4, from: '0x789...', to: '0xabc...', date: '2022', amount: '200' },
      ],
      address: '0x123...',
      user: 'John Doe',
    };
  }

  componentDidMount() {
    // Fetch wallet data from the blockchain
    // Update state with the fetched data
  }

  
  render() {
    const { balance, transactions, address, user } = this.state;
  
    return (
      <div style={{ overflow: 'auto', maxWidth: '100%', marginTop: '15px' }}>
        <Header as='h2' textAlign='center'>
          <Icon name='user' />
          {user}
          <Header.Subheader>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Dropdown text={address} />
              <Label color='green' size='medium'>
                {balance} ETH
              </Label>
            </div>
          </Header.Subheader>
        </Header>
        <Table compact size='small' >
          <TableHeader>
            <TableRow>
              <TableHeaderCell>From</TableHeaderCell>
              <TableHeaderCell>To</TableHeaderCell>
              <TableHeaderCell>Date</TableHeaderCell>
              <TableHeaderCell>Amount</TableHeaderCell> {/* Added missing header cell */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((tx) => (
              <TableRow key={tx.id}>
                <TableCell>{tx.from}</TableCell>
                <TableCell>{tx.to}</TableCell>
                <TableCell>{tx.date}</TableCell>
                <TableCell>{tx.amount}</TableCell> {/* Added missing table cells */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
  
}

render(<WalletFeatures />, document.getElementById('react-target'));