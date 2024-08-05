import React from 'react';
import { Box, Button, IconButton, Typography, useTheme, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Avatar } from "@mui/material";
import { tokens } from "../../theme";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import CustomerFeedback from "../../components/CustomerFeedback";
import Goals from "../../components/Goals";
import PopularDishes from "../../components/PopularDishes";
import Menus from "../../components/Menus";
import StatBox1 from '../../components/StatBox1';
import ChangeHistoryIcon from '@mui/icons-material/ChangeHistory';


const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  // Sample data for the table
  const customerData = [
    { id: 1, name: "John Doe", orderNo: "123", amount: "$56", status: "Confirmed", imgUrl: "https://via.placeholder.com/30" },
    { id: 2, name: "Jane Smith", orderNo: "678888", amount: "$56", status: "Confirmed", imgUrl: "https://via.placeholder.com/30" },
    { id: 3, name: "Michael Johnson", orderNo: "677473", amount: "$56", status: "Rejected", imgUrl: "https://via.placeholder.com/30" },
    { id: 4, name: "Emily Davis", orderNo: "45668", amount: "$56", status: "Rejected", imgUrl: "https://via.placeholder.com/30" },
    { id: 5, name: "William Brown", orderNo: "66768", amount: "$56", status: "Rejected", imgUrl: "https://via.placeholder.com/30" },
    { id: 6, name: "Olivia Martinez", orderNo: "58678", amount: "$56", status: "Confirmed", imgUrl: "https://via.placeholder.com/30" },
  ];

  // Function to get button styles based on status
  const getStatusButtonStyles = (status) => {
    if (status === "Confirmed") {
      return {
        backgroundColor: colors.greenAccent[500],
        color: colors.grey[100],
      };
    } else if (status === "Rejected") {
      return {
        backgroundColor: colors.redAccent[500],
        color: colors.grey[100],
      };
    }
    return {};
  };

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        {/* <Box>
          <Button
            sx={{
              backgroundColor: colors.blueAccent[700],
              color: colors.grey[100],
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlinedIcon sx={{ mr: "10px" }} />
            Download Reports
          </Button>
        </Box> */}
      </Box>

      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="75"
            subtitle="Total Order"
            // progress="0.75"
            increase="+14%"
            icon={
              <EmailIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="70"
            subtitle="Total Delivered"
            progress="0.50"
            increase="+21%"
            icon={
              <PointOfSaleIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <StatBox
            title="05"
            subtitle="Total Canceled"
            progress="0.30"
            increase="3%"
            icon={
              <PersonAddIcon
                sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
              />
            }
            iconIncrease={
              <ChangeHistoryIcon
              sx={{ color: 'red', fontSize: '20px' , transform: 'rotate(180deg)'}}
              />
            }
          />
        </Box>
        <Box
          gridColumn="span 3"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
            <StatBox1
    title="$ 67254"
    subtitle="Net Profit"
    progress="0.80"
    increase="+43%"
    iconIncrease={
      <ChangeHistoryIcon
      sx={{ color: 'green', fontSize: '20px'}}
      />
    }
  />
       
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Revenue Generated
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
         {/* <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          display="flex"
          flexDirection="column"
        >
          <Box display="flex" justifyContent="space-between" p="15px">
            <Goals />
          </Box>
          <Box display="flex" justifyContent="space-between" p="15px">
            <PopularDishes />
          </Box>
          <Box display="flex" justifyContent="space-between" p="15px">
            <Menus />
          </Box>
        </Box> */}

<Box
  gridColumn="span 4"
  gridRow="span 2"
  display="flex"
  flexDirection="column"
  gap="20px"
  backgroundColor={colors.primary[400]}
>
  <Goals />
  <PopularDishes />
  <Menus />
</Box>
        
        {/* ROW 3 - Customer Table and Feedback */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="20px"
          display="flex"
          flexDirection="column"
          height="100%"
        >
          <Typography variant="h5" fontWeight="600" mb="15px">
            Recent Orders
          </Typography>
          <Box
            flexGrow={1}
            overflow="auto"
          >
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell></TableCell> {/* For image column */}
                    <TableCell>Name</TableCell>
                    <TableCell>OrderNo</TableCell>
                    <TableCell>Amount</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {customerData.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell>
                        <Avatar src={customer.imgUrl} />
                      </TableCell>
                      <TableCell>{customer.name}</TableCell>
                      <TableCell>{customer.orderNo}</TableCell>
                      <TableCell>{customer.amount}</TableCell>
                      <TableCell>
                        <Button
                          sx={{
                            borderRadius: "20px",
                            padding: "5px 15px",
                            textTransform: "capitalize",
                            fontSize: "0.875rem",
                            ...getStatusButtonStyles(customer.status),
                          }}
                        >
                          {customer.status}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="20px"
          display="flex"
          flexDirection="column"
          height="100%"
        >
          <Typography variant="h5" fontWeight="600" mb="15px">
            Customer Feedback
          </Typography>
          <Box
            flexGrow={1}
            overflow="auto"
          >
            <CustomerFeedback />
          </Box>
        </Box>
        
      </Box>
    </Box>
  );
};

export default Dashboard;
