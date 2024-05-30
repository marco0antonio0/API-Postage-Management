import { DatabaseHelper } from '../database/databaseHelper';

/**
 * Serviço para obter todos os posts.
 * 
 * @returns {Promise<Array>} Uma lista de todos os posts.
 */
const getAllPosts = async () => {
    // Chama o DatabaseHelper para obter todos os registros da coleção 'posts'
    return await DatabaseHelper.getAll('posts');
};

/**
 * Serviço para obter um post específico pelo ID.
 * 
 * @param {string} id - O ID do post a ser recuperado.
 * @returns {Promise<Object>} O post com o ID especificado.
 */
const getPostById = async (id: string) => {
    // Chama o DatabaseHelper para obter um registro específico da coleção 'posts' pelo ID
    return await DatabaseHelper.getById('posts', id);
};

/**
 * Serviço para criar um novo post.
 * 
 * @param {Object} data - Os dados do novo post.
 * @returns {Promise<Object>} O post criado.
 */
const createPost = async (data: { title: string, type: string, text: string }) => {
    // Chama o DatabaseHelper para criar um novo registro na coleção 'posts' com os dados fornecidos
    return await DatabaseHelper.create('posts', data);
};

/**
 * Serviço para atualizar um post existente pelo ID.
 * 
 * @param {string} id - O ID do post a ser atualizado.
 * @param {Object} data - Os novos dados do post.
 * @returns {Promise<Object>} O post atualizado.
 */
const updatePost = async (id: string, data: { title: string, type: string, text: string }) => {
    // Chama o DatabaseHelper para atualizar um registro específico na coleção 'posts' pelo ID com os novos dados
    return await DatabaseHelper.update('posts', id, data);
};

/**
 * Serviço para deletar um post existente pelo ID.
 * 
 * @param {string} id - O ID do post a ser deletado.
 * @returns {Promise<void>} Indica que a operação foi bem-sucedida.
 */
const deletePost = async (id: string) => {
    // Chama o DatabaseHelper para deletar um registro específico na coleção 'posts' pelo ID
    return await DatabaseHelper.delete('posts', id);
};

// Exporta o serviço postService que contém todas as funções para manipulação de posts
export const postService = { getAllPosts, getPostById, createPost, updatePost, deletePost };
