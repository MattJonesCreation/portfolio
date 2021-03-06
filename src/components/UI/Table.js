import React from 'react';
import { Table, Header } from 'semantic-ui-react';

const UITable = (props) => (
    <div>
        <Header inverted as="h2">{props.title}</Header>
        <Table inverted unstackable>
            <Table.Header>
                <Table.Row>
                    {props.headers.map((header, index) => {
                        return (
                            <Table.HeaderCell key={index}>{header}</Table.HeaderCell>
                        );
                    })}
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {props.rows.map((row, index) => {
                    return (
                        <Table.Row key={index}>
                            {row.map((r, index) => {
                                return (
                                    <Table.Cell key={index}>{r}</Table.Cell>
                                );
                            })}
                        </Table.Row>
                    );
                })}
            </Table.Body>
        </Table>          
    </div>
);

export default UITable;