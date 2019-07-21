import React, { Component } from "react";
import { Table } from "reactstrap";

class Content extends Component {
  render() {
    const { heroes, getId } = this.props;
    return (
      <Table dark>
        <thead>
          <tr>
            <th>Hero</th>
            <th>Attack</th>
            <th>Attribute</th>
            <th>Roles</th>
          </tr>
        </thead>
        <tbody>
          {heroes.map(list => {
            return (
              <tr key={list.id} onClick={() => getId(list.id)}>
                <td>{list.localized_name}</td>
                <td className={list.attack_type === "Melee" ? "red" : "green"}>
                  {list.attack_type}
                </td>
                <td
                  className={`text-capitalize ${
                    list.primary_attr === "str"
                      ? "red"
                      : [list.primary_attr === "agi" ? "green" : "blue"]
                  }`}
                >
                  {list.primary_attr}
                </td>
                <td>
                  {list.roles.map((roles, i) => (
                    <label className="pr-2" key={i}>
                      {roles}
                    </label>
                  ))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    );
  }
}

export default Content;
