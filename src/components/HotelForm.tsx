import React, {FC, useState} from 'react';
import {Box, TextField} from "@mui/material";
import {CustomButton} from "../UI/CustomButton";
import ruLocale from 'date-fns/locale/ru';
import {Controller, SubmitHandler, useForm} from "react-hook-form";
import * as yup from "yup";
import {yupResolver} from "@hookform/resolvers/yup";
import {CustomPaper} from "../UI/CustomPaper";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider';
import {DesktopDatePicker} from '@mui/x-date-pickers/DesktopDatePicker';
import {useActions} from "../hooks/useActions";
import {IHotel} from "../types/IHotel";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useDate} from "../hooks/useDate";
import dayjs from "dayjs";

export interface FetchHotelsProps {
    location: string;
    date: Date;
    daysQuantity: number;
    favourites: IHotel[]
}

const schema = yup.object({
    location: yup.string().required('Введите локацию'),
    date: yup.date(),
    // .min( date = new Date.now() , 'Пожалуйста, выберите предстоящую дату'),
    daysQuantity: yup.number().max(365, "Количество дней должно быть меньше (макс 365)")
        .required("Выберете количество дней")
});

const HotelForm: FC<FetchHotelsProps> = ({date, daysQuantity, location}) => {
    const {favourites} = useTypeSelector(state => state.hotel)
    const {fetchHotels} = useActions()
    const currentDate = dayjs(date).format('YYYY-MM-DD')

    const {register, control, handleSubmit, formState: {errors}} = useForm<FetchHotelsProps>({
        resolver: yupResolver(schema),
        defaultValues: {
            location,
            date,
            daysQuantity,
        }
    });

    const onSubmit: SubmitHandler<FetchHotelsProps> = (data) => {
        let newData: FetchHotelsProps = {
            ...data,
            favourites
        }
        fetchHotels(newData)
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
                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={ruLocale}>
                        <Controller
                            name="date"
                            control={control}
                            render={({field}) => <DesktopDatePicker
                                {...field}
                                label="Дата заселения"
                                inputFormat="MM.dd.yyyy"
                                minDate={new Date(currentDate)}
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