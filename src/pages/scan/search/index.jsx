import { useEffect, useState } from 'react'
import { ListShow } from '../../../components/listshow'
import { getQueryString } from '../../../utils/getParam'
import { searchDesc } from '../../../api'
export const Search = (props) => {
    const [listData, setData] = useState([])

    console.log(window.location.href)
    useEffect(() => {
        const descu = getQueryString('desc')
        searchDesc(descu).then((req) => {
            setData(req.data)

        })

    }, [])
    return (
        <>
            <br />
            <p style={{ fontSize: '15px' }}>{`搜索到${listData.length}条结果`}</p>
            <ListShow listData={listData}></ListShow>
        </>
    )
}