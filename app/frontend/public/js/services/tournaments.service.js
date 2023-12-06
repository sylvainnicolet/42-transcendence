import config from '../../config.js';

const TOURNAMENTS_API = config.BACKEND_API_URL + '/tournaments/';

export default class TournamentsService {

  static async create(tournament) {
    try {
      const response = await fetch(TOURNAMENTS_API + 'create/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tournament),
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  static async update(id, tournament) {
    try {
      const response = await fetch(TOURNAMENTS_API + 'update/' + id, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tournament),
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  static async getDetail(id) {
    try {
      const response = await fetch(TOURNAMENTS_API + 'detail/' + id);

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  static async delete(id) {
    try {
      const response = await fetch(TOURNAMENTS_API + 'delete/' + id, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
    } catch (error) {
      throw error;
    }
  }

  static async getList() {
    try {
      const response = await fetch(TOURNAMENTS_API + 'list/');

      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }
}