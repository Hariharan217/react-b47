import React from 'react'
import Cards from './Cards'


function Section() {
  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          <Cards name="Fancy Product" price="$40.00 - $80.00" viewcard="View option" sale="no" star="no"/>
          <Cards name="Special Item" price=" $18.00" mutedprice="$20.00" viewcard="Add to card" sale="yes" star="yes"/>
          <Cards name="Sale Item" price=" $25.00" mutedprice="$50.00" viewcard="Add to card" sale="yes" star="no"/>
          <Cards name="Popular Item" price="$40.00" viewcard="Add to card" sale="no" star="yes"/>
          <Cards name="Sale Item" price=" $25.00" mutedprice="$50.00" viewcard="Add to card" sale="yes" star="no"/>
          <Cards name="Fancy Product" price="$120.00 - $280.00" viewcard="View option" sale="no" star="no"/>
          <Cards name="Special Item" price=" $18.00" mutedprice="$20.00" viewcard="Add to card" sale="yes" star="yes" />
          <Cards name="Popular Item" price="$40.00" viewcard="Add to card" sale="no" star="yes"/>
          
          </div>
          
        </div>
        </section >
    </div>

  )
}

export default Section