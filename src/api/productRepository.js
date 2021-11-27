import axios from 'axios';

export class ProductsRepository {

    url = "https://api.johnlawrimore.com/store/products";

    config = {
        headers: {
            Authorization: "jlawrimore"
        }
    };

    getProducts() {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }

    getProduct(id) {
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/${id}`, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }

    addReview(id, Review) {
        window.alert(`${this.url}/${id}/reviews`);
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/${id}/reviews`, Review, this.config)
                .then(x => resolve(x.data))
                .catch(x => {
                    alert(x);
                    reject(x);
                })
        });
    }
}