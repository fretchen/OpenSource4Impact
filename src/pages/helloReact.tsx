import React, {useState} from 'react';
import Layout from '@theme/Layout';

const CostTable = () => {
  const [staff, setStaff] = useState('');
  const [hardware, setHardware] = useState('');
  const [administration, setAdministration] = useState('');
  const [licences, setLicences] = useState('');

  const sum = [staff, hardware, administration, licences].reduce((acc, val) => acc + (parseFloat(val) || 0), 0);

  return (
    <table >
      <thead>
        <tr>
          <th>Cost Category</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Staff</td>
          <td><input type="text" placeholder="Enter value" value={staff} onChange={(e) => setStaff(e.target.value)} />€</td>
        </tr>
        <tr>
          <td>Hardware</td>
          <td><input type="text" placeholder="Enter value" value={hardware} onChange={(e) => setHardware(e.target.value)} />€</td>
        </tr>
        <tr>
          <td>Administration</td>
          <td><input type="text" placeholder="Enter value" value={administration} onChange={(e) => setAdministration(e.target.value)} />€</td>
        </tr>
        <tr>
          <td>Licences</td>
          <td><input type="text" placeholder="Enter value" value={licences} onChange={(e) => setLicences(e.target.value)} /> €</td>
        </tr>
        <tr>
          <td><strong>Total</strong></td>
          <td>{sum.toFixed(2)} €</td>
        </tr>
      </tbody>
    </table>
  );
};

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
        # Costs and financing

In this section, we will discuss some of the financial aspects which are important to as you prepare an manage an open source project.

## A first cost overview

In general we can divide the cost into four major categories:

- **Staff**: The staff includes the people working on the project like developers, testers, Q&A and others, their travel etc.
- **Hardware**: The hardware that is needed to get the whole project also running.
- **Administration**: Who is working behind the scences to get the non-technical questions resolved ?
- **Licences**: It is fairly likely that you will have some licence costs (working on open-source or not).

Then it is also helfpul to separate  the costs into a first build and roll-out / run.
          <ul>
            <li> <strong>Staff</strong>: The staff includes the people working on the project like developers, testers, Q&A and others, their travel etc.</li>
            <li><strong>Hardware</strong>: The hardware that is needed to get the whole project also running.</li>
            <li><strong>Administration</strong>: Who is working behind the scenes to get the non-technical questions resolved?</li>
            <li><strong>Licences</strong>: It is fairly likely that you will have some licence costs (working on open-source or not).</li>
          </ul>
        <CostTable />
    </Layout>
  );
}