import axios from "axios"
//Base URL 
const base_url = "https://api.rawg.io/api/";
const api = process.env.REACT_APP_RAWG_API

//Geting the dates
const getCurrentMonth = () => {
    const month = new Date().getMonth() + 1 ;
    if (month < 10){
        return `0${month}`
    } else{
        return month
    }
};
//Geting the dates
const getCurrentDay = () => {
    const day = new Date().getDate() ;
    if (day < 10){
        return `0${day}`
    } else{
        return day
    }
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

//Popular games
const popular_games = `games?key=${api}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`
const upcoming_games = `games?key=${api}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`


export const popularGamesURL = () => `${base_url}${popular_games}`
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`
