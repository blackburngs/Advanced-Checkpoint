import React from 'react'
import Table from 'react-bootstrap/Table'
import PropTypes from 'prop-types';


function ProductTable(props) {
  console.log(props);
    return (
        <div>
            <Table striped bordered hover variant="dark">
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {props.products.map(product => 
                  <tr>
                    <td>{product.category}</td>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                  </tr>
                  )}
              </tbody>
            </Table>
        </div>
    )
};

ProductTable.propTypes = {
  category: PropTypes.oneOf(['Electronics', 'Clothes']),
  name: PropTypes.string,
  price: PropTypes.number
};

export default ProductTable