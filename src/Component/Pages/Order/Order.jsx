import { useState } from 'react';
import orderCover from '../../../assets/shop/banner2.jpg'
import Cover from '../shared/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../Hooks/useMenu';

import OrderTab from './OrderTab/OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';


const Order = () => {

    const categories = ['salad' , 'pizza' , 'soup' , 'dessert' , 'drinks']

    const { category } = useParams();

    const initialIndex = categories.indexOf(category)

    const [tabIndex, setIndex] = useState(initialIndex)
    const [menu] = useMenu();
   

    

    const desserts = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')
    const drinks = menu.filter(item => item.category === 'drinks')


    return (
        <div>
              <Helmet>
                <title>Bistro | Order Food </title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <Cover img={orderCover} title={"Order Food"}></Cover>
            <div className='text-center mt-5 mb-5'>
                <Tabs defaultIndex={tabIndex} onSelect={(index) =>
                    setIndex(index)}>
                    <TabList className='uppercase '>
                        <Tab>Salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>desserts</Tab>
                        <Tab>Drinks</Tab>

                    </TabList>
                    <TabPanel>
                        <OrderTab items={salad}></OrderTab>
                    </TabPanel>


                    <TabPanel>
                        <OrderTab items={pizza}></OrderTab>
                    </TabPanel>


                    <TabPanel>
                        <OrderTab items={soup}></OrderTab>
                    </TabPanel>


                    <TabPanel>
                        <OrderTab items={desserts}></OrderTab>
                    </TabPanel>

                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>




                </Tabs>
            </div>
        </div>
    );
};

export default Order;