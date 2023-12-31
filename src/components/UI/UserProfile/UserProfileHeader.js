import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'
import { Avatar, TextField, Button, Typography, Grid } from "@material-ui/core";
import { useSelector } from 'react-redux';

import useStyles from "./ProfileStyles";
import { useTranslation } from "react-i18next";


const UserProfileHeader = ({
    user,
    isEditing,
    handleEditProfile,
    handleSaveProfile,
    handleCancelEdit,
    handlePhotoChange,
    handleNameChange,
    handleEmailChange,
}) => {
    const userData = useSelector((state) => state.auth.data);
    const classes = useStyles();
    const { t } = useTranslation();

    const styles = {
        placeholder: {
            color: 'black', // Замените 'your-desired-color' на цвет, который вы хотите использовать
        },
    };
    useEffect(() => {
        console.log(user)
    }, [user])
    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={12}>
                <Typography variant="h4">{t('myProfile')}</Typography>
            </Grid>
            <Grid item xs={12} md={10}>
                <div>
                    <Avatar
                        alt="User Photo"
                        style={{ padding: '0', height: '10em', width: '10em' }}
                        src={user.avatarUrl}
                        onError={(e) => {
                            e.target.src =`${t('anotherImg')}`;
                        }}
                    />
                    {isEditing ? (
                        <TextField
                            label={t('urlImg')}
                            fullWidth
                            value={user.photoURL}
                            onChange={handlePhotoChange}
                        />
                    ) : (
                        <Typography>{ }</Typography>
                    )}
                </div>
            </Grid>
            <Grid item xs={12} md={8}>
                 {t('fullname')}:
                <TextField
                    fullWidth
                    InputProps={{
                        style: {
                            color: 'black',
                            fontWeight: 'bold'
                        },
                    }}
                    placeholder={user.fullName}
                    onChange={handleNameChange}
                    disabled={!isEditing}
                />
                {t('email')} :
                <TextField
                    InputProps={{
                        style: {
                            color: 'black',
                            fontWeight: 'bold'
                        },
                    }}
                    fullWidth
                    placeholder={user.email}
                    onChange={handleEmailChange}
                    disabled={!isEditing}
                />
            </Grid>
            <Grid item xs={12}>
                {isEditing ? (
                    <div style={{ display: 'flex', gap: '1em' }}>

                        <Button variant="outlined" color="primary" onClick={handleSaveProfile}>
                            {t('save')}
                        </Button>
                        <Button variant="outlined" color="secondary" onClick={handleCancelEdit}>
                            {t('cancel')}
                        </Button>
                    </div>
                ) : (
                    <Button variant="outlined" color="primary" onClick={handleEditProfile}>
                        {t('editProfile')}
                    </Button>
                )}
            </Grid>
        </Grid>
    );
};

export default UserProfileHeader;
