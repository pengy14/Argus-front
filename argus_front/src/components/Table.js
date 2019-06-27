import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import {Typography} from "@material-ui/core";

const useStyles1 = makeStyles(theme => ({
    root: {
        flexShrink: 0,
        color: theme.palette.text.secondary,
        marginLeft: theme.spacing(2.5),
    },
}));

function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    function handleFirstPageButtonClick(event) {
        onChangePage(event, 0);
    }

    function handleBackButtonClick(event) {
        onChangePage(event, page - 1);
    }

    function handleNextButtonClick(event) {
        onChangePage(event, page + 1);
    }

    function handleLastPageButtonClick(event) {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    }

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="First Page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="Previous Page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="Next Page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="Last Page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

function createData(commodityName,url,price,imageUrl,source,price_date) {
    return { commodityName,url,price,imageUrl,source,price_date };
}

// const rows = [
//     createData('Cupcake', 305, 3.7),
//     createData('Donut', 452, 25.0),
//     createData('Eclair', 262, 16.0),
//     createData('Frozen yoghurt', 159, 6.0),
//     createData('Gingerbread', 356, 16.0),
//     createData('Honeycomb', 408, 3.2),
//     createData('Ice cream sandwich', 237, 9.0),
//     createData('Jelly Bean', 375, 0.0),
//     createData('KitKat', 518, 26.0),
//     createData('Lollipop', 392, 0.2),
//     createData('Marshmallow', 318, 0),
//     createData('Nougat', 360, 19.0),
//     createData('Oreo', 437, 18.0),
// ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const simulate = [
    {
        "commodityName": "D7200单反相机Nikon 尼康 D7200 单反相机附送Aisying单反包 (官方标配, D7200(AF-S DX 尼克尔 18-140mm f/3.5-5.6G ED VR镜头)",
        "url": "https://www.amazon.cn/dp/B07DBXW7VP/ref=sr_1_1?__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&keywords=d7200&qid=1561639115&s=gateway&sr=8-1",
        "price": "6,780.00",
        "imageUrl": "https://m.media-amazon.com/images/I/61uW2k1i5AL._AC_UL320_.jpg",
        "source": "amazon",
        "price_date": "2019-06-27 20:38:37"
    },
    {
        "commodityName": "Nikon D 7200数码单反相机（24.2&nbsp;MP ， Wi-Fi ， NFC) 2.0英寸 LCD 显示屏",
        "url": "https://www.amazon.cn/dp/B00U5W8HFI/ref=sr_1_2?__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&keywords=d7200&qid=1561639115&s=gateway&sr=8-2",
        "price": "5,892.02",
        "imageUrl": "https://m.media-amazon.com/images/I/81F10oHeT3L._AC_UL320_.jpg",
        "source": "amazon",
        "price_date": "2019-06-27 20:38:37"
    },
    {
        "commodityName": "D7200单反相机Nikon 尼康 D7200 单反相机附送Aisying单反包 (官方标配, D7200机身)",
        "url": "https://www.amazon.cn/dp/B07DBXJV4Z/ref=sr_1_3?__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&keywords=d7200&qid=1561639115&s=gateway&sr=8-3",
        "price": "5,099.00",
        "imageUrl": "https://m.media-amazon.com/images/I/51EocYqUUpL._AC_UL320_.jpg",
        "source": "amazon",
        "price_date": "2019-06-27 20:38:37"
    },
    {
        "commodityName": "尼康 D7200 单反套机（AF-S DX 尼克尔 18-140mm f/3.5-5.6G ED VR镜头）尼康D7200（18-140）单反相机",
        "url": "https://www.amazon.cn/dp/B015QWJPA2/ref=sr_1_4?__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&keywords=d7200&qid=1561639115&s=gateway&sr=8-4",
        "price": "6,680.00",
        "imageUrl": "https://m.media-amazon.com/images/I/61BC4Eq5ylL._AC_UL320_.jpg",
        "source": "amazon",
        "price_date": "2019-06-27 20:38:37"
    },
    {
        "commodityName": "尼康D7200单反摄影宝典 相机设置 拍摄技法 场景实战 后期处理",
        "url": "https://www.amazon.cn/dp/B01CSHLR5E/ref=sr_1_5?__mk_zh_CN=%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%BD%91%E7%AB%99&keywords=d7200&qid=1561639115&s=gateway&sr=8-5",
        "price": "0.00",
        "imageUrl": "https://m.media-amazon.com/images/I/71xw5xqrdPL._AC_UL320_.jpg",
        "source": "amazon",
        "price_date": "2019-06-27 20:38:37"
    }
];

const useStyles2 = makeStyles(theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(3),
    },
    table: {
        minWidth: 500,
    },
    tableWrapper: {
        overflowX: 'auto',
    },
}));

export default function CustomPaginationActionsTable(props) {
    // const rows=props.searchResults.map((commodityName,url,price,imageUrl,source,price_date)=>createData(commodityName,url,price,imageUrl,source,price_date))
    const rows=props.searchResults;
    const classes = useStyles2();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

    function handleChangePage(event, newPage) {
        setPage(newPage);
    }

    function handleChangeRowsPerPage(event) {
        setRowsPerPage(parseInt(event.target.value, 10));
    }

    return (
        <Paper className={classes.root}>
            <div className={classes.tableWrapper}>
                <Table className={classes.table}>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row,index) => (
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    {index}
                                </TableCell>
                                <TableCell align="right" style={{
                                    whiteSpace: "normal",
                                    wordWrap: "break-word"
                                }}> <Typography variant="body1" align="center" className={classes.text}>
                                    {row.commodityName}
                                </Typography></TableCell>
                                {/*<TableCell align="right"> <Typography variant="body1" align="center" className={classes.text}>*/}
                                    {/*{row.url}*/}
                                {/*</Typography></TableCell>*/}
                                <TableCell align="right"> <Typography variant="body1" align="center" className={classes.text}>
                                    {row.price}
                                </Typography></TableCell>
                                <TableCell align="right"><Typography variant="body1" align="center" className={classes.text}>
                                    {row.source}
                                </Typography></TableCell>
                                <TableCell align="right"> <Typography variant="body1" align="center" className={classes.text}>
                                    {row.price_date}
                                </Typography></TableCell>
                            </TableRow>
                        ))}

                        {emptyRows > 0 && (
                            <TableRow style={{ height: 48 * emptyRows }}>
                                <TableCell colSpan={6} />
                            </TableRow>
                        )}
                    </TableBody>
                    {props.searchResults.length!==0&&<TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                colSpan={3}
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: { 'aria-label': 'Rows per page' },
                                    native: true,
                                }}
                                onChangePage={handleChangePage}
                                onChangeRowsPerPage={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>}
                </Table>
            </div>
        </Paper>
    );
}