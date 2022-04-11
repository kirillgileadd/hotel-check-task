import React, {FC} from 'react';
import {Box, TextField} from "@mui/material";
import {CustomButton} from "../UI/CustomButton";
import {IUser} from "../types/IUser";
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {CustomPaper} from "../UI/CustomPaper";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';

interface SearchFormProps {
    loginAction?: (user: IUser) => void;
}

export interface SearchFormValue {
    location: string;
    date: Date;
    daysQuantity: number;
}

const schema = yup.object({
    location: yup.string().required('Введите локацию'),
    date: yup.string().required('Введите дату'),
    daysQuantity: yup.number().required()
});

const HotelForm: FC<SearchFormProps> = ({loginAction}) => {
    const {register, control, handleSubmit, watch, formState: {errors}} = useForm<SearchFormValue>({
        resolver: yupResolver(schema),
        defaultValues: {
            location: 'Moscow',
            date: new Date(),
            daysQuantity: 1
        }
    });

    const onSubmit: SubmitHandler<SearchFormValue> = (data) => {
        console.log(data);
        // loginAction({email: data.email, password: data.password})
    }

    return (
        <CustomPaper>
            <Box
                sx={{
                    position: "relative",
                    '& .MuiTextField-root': {mb: "28px"},
                }}
                component='form'
                onSubmit={handleSubmit(onSubmit)}
            >
                <TextField
                    fullWidth
                    {...register("location")}
                    id="standard-search"
                    label="Локация"
                    name='location'
                    error={!!errors.location}
                    helperText={errors.location?.message}
                />
                <Box>
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <Controller
                            name="date"
                            control={control}
                            render={({field}) => <DesktopDatePicker
                                {...field}
                                label="Дата заселения"
                                inputFormat="MM/dd/yyyy"
                                renderInput={(params) =>
                                    <TextField
                                        fullWidth
                                        {...params}
                                        error={!!errors.date}
                                        helperText={errors.date?.message}
                                    />}
                            />}
                        />
                    </LocalizationProvider>
                </Box>
                <TextField
                    fullWidth
                    {...register("daysQuantity")}
                    id="standard-search"
                    label="Количество дней"
                    name='daysQuantity'
                    error={!!errors.daysQuantity}
                    helperText={errors.daysQuantity?.message}
                />
                <CustomButton
                    type='submit'
                    variant='contained'
                    fullWidth
                >
                    Найти
                </CustomButton>
            </Box>
        </CustomPaper>
    );
};

export default HotelForm;