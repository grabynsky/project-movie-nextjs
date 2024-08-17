import React from 'react';
import styles from "./RegistrationComponent.module.css";

const RegistrationComponent = () => {
    return (
        <main className={styles.main}>
            <form
                action="addUser"
                className={styles.form}
            >

                <div className={styles.divForm}>
                    <label>User name:
                        <input
                            className={styles.input}
                            type="text"
                            name={'userName'}
                            placeholder={'Enter user name'}
                        />
                    </label>

                    <label>User password:
                        <input
                            className={styles.input}
                            type="text"
                            name={'userPassword'}
                            placeholder={'Enter password'}
                        />
                    </label>
                </div>
                <button className={styles.btn}>Registration</button>
            </form>
        </main>
    );
};

export default RegistrationComponent;