import React, { useEffect, useState } from 'react'
import { Button, Modal, Checkbox } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { selectRequesting } from '../../stores/special/requesting/RequestingSelector';
import { selectFinished } from '../../stores/special/finished/FinishedSelector';
import BloodSamplesAction from '../../stores/product/ProductAction';
import ReqDeleteSamples from '../../stores/product/request/ReqDeleteSamples.ts';
import DeleteOutlined from '@ant-design/icons/DeleteOutlined'
import '../forms/form-style.css'

export default function ModalDeleteConfirmation(props) {
    const [checked, setChecked] = useState(false)
    const dispatch = useDispatch()
    const [visibility, setVisibility] = useState(false)
    const { data } = props;
    const isRequesting = useSelector((state) =>
        selectRequesting(state, [BloodSamplesAction.REQUEST_DELETE_BLOOD_SAMPLES])
    );
    const isFinished = useSelector((state) =>
        selectFinished(state, BloodSamplesAction.REQUEST_DELETE_BLOOD_SAMPLES)
    );
    const deleteRecord =() => {
        dispatch(BloodSamplesAction._requestDeleteBloodSamples(new ReqDeleteSamples({ id: data.id })))
    };
    useEffect(() => {
        if (isFinished) setVisibility(false)
    }, [isFinished])
    const onChangeCheck = (e) => {
        setChecked(e.target.checked)
    }
    return (
        <>
            <Button onClick={() => setVisibility(true)} key={props.data.id + 'delete'} style={{ borderRadius: '60%', padding: '1px 4px', backgroundColor: '#FFF3F3' }}><span style={{ display: "flex", justifyContent: "center" }}><DeleteOutlined style={{fontSize:20,color:'#545454'}} /></span></Button>
            <Modal
                title={<span><DeleteOutlined style={{ fontSize: '50px', color: 'gray' }} /></span>}
                centered
                // okText={'Save Setting'}
                visible={visibility}
                onCancel={() => setVisibility(false)}
                // cancelText={'Cancel'}
                // onOk={onSubmit}
                footer={null}
                destroyOnClose={true}
            >
                <h4>
                    Are you sure you want to delete this entry? This will permanently delete the entry from record
                </h4>
                <div style={{marginBottom:'40px', marginTop:'40px', textAlign:'center'}}>
                <Checkbox checked={checked} onChange={onChangeCheck}> I am aware and confirming this deletion</Checkbox>
                </div>
                <div className="flex-center">
                        <div className="button-gap">
                            <Button onClick={()=>deleteRecord()} loading={isRequesting} type="danger" disabled={!checked}> Delete </Button>
                            <span className="gray-button">
                                <Button onClick={() => setVisibility(false)} type={'primary'}> Cancel </Button>
                            </span>
                        </div>
                </div>
            </Modal>
        </>
    )
}
