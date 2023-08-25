'use client'

import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function Language(){
    const {t} = useTranslation('App.Header.Language');
    const [anchorE1, setAnchorE1] = React.useState<EventTarget | null>(null)

    function openLanguage(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        setAnchorE1(e.currentTarget);
      }

    function closeLanguage(){
        setAnchorE1(null)
    }

    return(
        <div>
            <button onClick={openLanguage}>Open Language</button>
        </div>
    )
}