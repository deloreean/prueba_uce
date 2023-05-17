import { $axios } from "../config";

export const getSeries = async (page = 1) => {
  try {
    const { data } = await $axios.get(`/most-popular?page=${page}`);

    return data;
  } catch (error) {
    throw Error("Something went wrong!");
  }
};

export const searchSerie = async (search = "", page = 1) => {
  try {
    const { data } = await $axios.get(`/search?q=${search}&page=${page}`);

    return data;
  } catch (error) {
    throw Error("Something went wrong!");
  }
};

export const getSerieById = async (serieId) => {
  try {
    const { data } = await $axios.get(`/show-details?q=${serieId}`);

    return data;
  } catch (error) {
    throw Error("Something went wrong!");
  }
};

