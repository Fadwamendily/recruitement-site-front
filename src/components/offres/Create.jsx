import React, { useState } from 'react';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
} from 'antd';

const Create = () => {
    const [componentSize, setComponentSize] = useState('default');

    const onFormLayoutChange = ({ size }) => {
        setComponentSize(size);
    };
    return (
        <div>
            <Form
                labelCol={{
                    span: 4,
                }}
                wrapperCol={{
                    span: 14,
                }}
                layout="horizontal"
                initialValues={{
                    size: componentSize,
                }}
                onValuesChange={onFormLayoutChange}
                size={componentSize}
            >
                <Form.Item label="Poste">
                    <Input />
                </Form.Item>
                <Form.Item label="Description">
                    <Input />
                </Form.Item>
                <Form.Item label="Type de contrat">
                    <Select>
                        <Select.Option value="demo">CDI</Select.Option>
                        <Select.Option value="demo">CDD</Select.Option>
                        <Select.Option value="demo">CIVP</Select.Option>
                        <Select.Option value="demo">KARAMA</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Catégorie">
                    <Select>
                        <Select.Option value="demo">Informatique</Select.Option>
                        <Select.Option value="demo">Ingénierie</Select.Option>
                        <Select.Option value="demo">Education</Select.Option>
                        <Select.Option value="demo">Artisanat</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Catégorie">
                    <Select>
                        <Select.Option value="demo">Ariana</Select.Option>
                        <Select.Option value="demo">Beja</Select.Option>
                        <Select.Option value="demo">Ben Arous</Select.Option>
                        <Select.Option value="demo">Bizerte</Select.Option>
                        <Select.Option value="demo">Bizerte</Select.Option>
                        <Select.Option value="demo">Bizerte</Select.Option>
                        <Select.Option value="demo">Bizerte</Select.Option>
                        <Select.Option value="demo">Bizerte</Select.Option>
                        <Select.Option value="demo">Bizerte</Select.Option>
                        <Select.Option value="demo">Bizerte</Select.Option>
                        <Select.Option value="demo">Bizerte</Select.Option>
                        <Select.Option value="demo">Bizerte</Select.Option>
                        <Select.Option value="demo">Bizerte</Select.Option>
                        <Select.Option value="demo">Bizerte</Select.Option>
                    </Select>
                </Form.Item>
             
                <Form.Item label="Confirmer la création de l'offre">
                    <Button>Créer</Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default Create
