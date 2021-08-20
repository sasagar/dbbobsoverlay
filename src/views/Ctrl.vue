<template>
  <div class="overlay">
    <section>
      <h2>Survivors'</h2>
      <ul>
        <li>
          <div class="selector">
            <section>
              <h3>Level</h3>
              <input
                type="radio"
                name="level1"
                id="level1"
                value="0"
                v-model="perk1selectlv"
              />
              <label for="level1">None</label>
              <input
                type="radio"
                name="level1"
                id="level1"
                value="1"
                v-model="perk1selectlv"
              />
              <label for="level1">1</label>
              <input
                type="radio"
                name="level1"
                id="level1"
                value="2"
                v-model="perk1selectlv"
              />
              <label for="level1">2</label>
              <input
                type="radio"
                name="level1"
                id="level1"
                value="3"
                v-model="perk1selectlv"
              />
              <label for="level1">3</label>
            </section>
            <section>
              <h3>Perk</h3>
              <select class="perklist" name="perk1" v-model="perk1selectpk">
                <template v-for="perk in perks" :key="perk.id">
                  <option :value="perk.ja">
                    {{ perk.ja }} / {{ perk.en }}
                  </option>
                </template>
              </select>
            </section>
          </div>
        </li>

        <li>
          <div class="selector">
            <section>
              <h3>Level</h3>
              <input
                type="radio"
                name="level2"
                id="level2"
                value="0"
                v-model="perk2selectlv"
              />
              <label for="level2">None</label>
              <input
                type="radio"
                name="level2"
                id="level2"
                value="1"
                v-model="perk2selectlv"
              />
              <label for="level2">1</label>
              <input
                type="radio"
                name="level2"
                id="level2"
                value="2"
                v-model="perk2selectlv"
              />
              <label for="level2">2</label>
              <input
                type="radio"
                name="level2"
                id="level2"
                value="3"
                v-model="perk2selectlv"
              />
              <label for="level2">3</label>
            </section>
            <section>
              <h3>Perk</h3>
              <select class="perklist" name="perk2" v-model="perk2selectpk">
                <template v-for="perk in perks" :key="perk.id">
                  <option :value="perk.ja">
                    {{ perk.ja }} / {{ perk.en }}
                  </option>
                </template>
              </select>
            </section>
          </div>
        </li>

        <li>
          <div class="selector">
            <section>
              <h3>Level</h3>
              <input
                type="radio"
                name="level3"
                id="level3"
                value="0"
                v-model="perk3selectlv"
              />
              <label for="level3">None</label>
              <input
                type="radio"
                name="level3"
                id="level3"
                value="1"
                v-model="perk3selectlv"
              />
              <label for="level3">1</label>
              <input
                type="radio"
                name="level3"
                id="level3"
                value="2"
                v-model="perk3selectlv"
              />
              <label for="level3">2</label>
              <input
                type="radio"
                name="level3"
                id="level3"
                value="3"
                v-model="perk3selectlv"
              />
              <label for="level3">3</label>
            </section>
            <section>
              <h3>Perk</h3>
              <select class="perklist" name="perk3" v-model="perk3selectpk">
                <template v-for="perk in perks" :key="perk.id">
                  <option :value="perk.ja">
                    {{ perk.ja }} / {{ perk.en }}
                  </option>
                </template>
              </select>
            </section>
          </div>
        </li>

        <li>
          <div class="selector">
            <section>
              <h3>Level</h3>
              <input
                type="radio"
                name="level4"
                id="level4"
                value="0"
                v-model="perk4selectlv"
              />
              <label for="level4">None</label>
              <input
                type="radio"
                name="level4"
                id="level4"
                value="1"
                v-model="perk4selectlv"
              />
              <label for="level4">1</label>
              <input
                type="radio"
                name="level4"
                id="level4"
                value="2"
                v-model="perk4selectlv"
              />
              <label for="level4">2</label>
              <input
                type="radio"
                name="level4"
                id="level4"
                value="3"
                v-model="perk4selectlv"
              />
              <label for="level4">3</label>
            </section>
            <section>
              <h3>Perk</h3>
              <select class="perklist" name="perk4" v-model="perk4selectpk">
                <template v-for="perk in perks" :key="perk.id">
                  <option :value="perk.ja">
                    {{ perk.ja }} / {{ perk.en }}
                  </option>
                </template>
              </select>
            </section>
          </div>
        </li>
      </ul>
    </section>

    <section>
      <h2>Killers'</h2>
      <ul>
        <li>
          <div class="selector">
            <section>
              <h3>Level</h3>
              <input
                type="radio"
                name="klevel1"
                id="klevel1"
                value="0"
                v-model="kperk1selectlv"
              />
              <label for="klevel1">None</label>
              <input
                type="radio"
                name="klevel1"
                id="klevel1"
                value="1"
                v-model="kperk1selectlv"
              />
              <label for="klevel1">1</label>
              <input
                type="radio"
                name="klevel1"
                id="klevel1"
                value="2"
                v-model="kperk1selectlv"
              />
              <label for="klevel1">2</label>
              <input
                type="radio"
                name="klevel1"
                id="klevel1"
                value="3"
                v-model="kperk1selectlv"
              />
              <label for="klevel1">3</label>
            </section>
            <section>
              <h3>Perk</h3>
              <select class="perklist" name="kperk1" v-model="kperk1selectpk">
                <template v-for="perk in kperks" :key="perk.id">
                  <option :value="perk.ja">
                    {{ perk.ja }} / {{ perk.en }}
                  </option>
                </template>
              </select>
            </section>
          </div>
        </li>

        <li>
          <div class="selector">
            <section>
              <h3>Level</h3>
              <input
                type="radio"
                name="klevel2"
                id="klevel2"
                value="0"
                v-model="kperk2selectlv"
              />
              <label for="klevel2">None</label>
              <input
                type="radio"
                name="klevel2"
                id="klevel2"
                value="1"
                v-model="kperk2selectlv"
              />
              <label for="klevel2">1</label>
              <input
                type="radio"
                name="klevel2"
                id="klevel2"
                value="2"
                v-model="kperk2selectlv"
              />
              <label for="klevel2">2</label>
              <input
                type="radio"
                name="klevel2"
                id="klevel2"
                value="3"
                v-model="kperk2selectlv"
              />
              <label for="klevel2">3</label>
            </section>
            <section>
              <h3>Perk</h3>
              <select class="perklist" name="kperk2" v-model="kperk2selectpk">
                <template v-for="perk in kperks" :key="perk.id">
                  <option :value="perk.ja">
                    {{ perk.ja }} / {{ perk.en }}
                  </option>
                </template>
              </select>
            </section>
          </div>
        </li>

        <li>
          <div class="selector">
            <section>
              <h3>Level</h3>
              <input
                type="radio"
                name="klevel3"
                id="klevel3"
                value="0"
                v-model="kperk3selectlv"
              />
              <label for="klevel3">None</label>
              <input
                type="radio"
                name="klevel3"
                id="klevel3"
                value="1"
                v-model="kperk3selectlv"
              />
              <label for="klevel3">1</label>
              <input
                type="radio"
                name="klevel3"
                id="klevel3"
                value="2"
                v-model="kperk3selectlv"
              />
              <label for="klevel3">2</label>
              <input
                type="radio"
                name="klevel3"
                id="klevel3"
                value="3"
                v-model="kperk3selectlv"
              />
              <label for="klevel3">3</label>
            </section>
            <section>
              <h3>Perk</h3>
              <select class="perklist" name="kperk3" v-model="kperk3selectpk">
                <template v-for="perk in kperks" :key="perk.id">
                  <option :value="perk.ja">
                    {{ perk.ja }} / {{ perk.en }}
                  </option>
                </template>
              </select>
            </section>
          </div>
        </li>

        <li>
          <div class="selector">
            <section>
              <h3>Level</h3>
              <input
                type="radio"
                name="klevel4"
                id="klevel4"
                value="0"
                v-model="kperk4selectlv"
              />
              <label for="klevel4">None</label>
              <input
                type="radio"
                name="klevel4"
                id="klevel4"
                value="1"
                v-model="kperk4selectlv"
              />
              <label for="klevel4">1</label>
              <input
                type="radio"
                name="klevel4"
                id="klevel4"
                value="2"
                v-model="kperk4selectlv"
              />
              <label for="klevel4">2</label>
              <input
                type="radio"
                name="klevel4"
                id="klevel4"
                value="3"
                v-model="kperk4selectlv"
              />
              <label for="klevel4">3</label>
            </section>
            <section>
              <h3>Perk</h3>
              <select class="perklist" name="kperk4" v-model="kperk4selectpk">
                <template v-for="perk in kperks" :key="perk.id">
                  <option :value="perk.ja">
                    {{ perk.ja }} / {{ perk.en }}
                  </option>
                </template>
              </select>
            </section>
          </div>
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { onMounted, ref, watch } from "vue";
import perks_json from "../assets/perks/survivors/perks.json";
import kperks_json from "../assets/perks/killers/perks.json";

export default {
  setup() {
    const perks = perks_json;
    const kperks = kperks_json;

    const perk1selectlv = ref("0");
    const perk2selectlv = ref("0");
    const perk3selectlv = ref("0");
    const perk4selectlv = ref("0");

    const perk1selectpk = ref("");
    const perk2selectpk = ref("");
    const perk3selectpk = ref("");
    const perk4selectpk = ref("");

    const kperk1selectlv = ref("0");
    const kperk2selectlv = ref("0");
    const kperk3selectlv = ref("0");
    const kperk4selectlv = ref("0");

    const kperk1selectpk = ref("");
    const kperk2selectpk = ref("");
    const kperk3selectpk = ref("");
    const kperk4selectpk = ref("");

    // Survivors
    watch(perk1selectlv, newVal => {
      localStorage.perk1selectlv = newVal;
      if (newVal == 0) {
        perk1selectpk.value = "";
        localStorage.perk1selectpk = "";
      }
    });

    watch(perk2selectlv, newVal => {
      localStorage.perk2selectlv = newVal;
      if (newVal == 0) {
        perk2selectpk.value = "";
        localStorage.perk2selectpk = "";
      }
    });

    watch(perk3selectlv, newVal => {
      localStorage.perk3selectlv = newVal;
      if (newVal == 0) {
        perk3selectpk.value = "";
        localStorage.perk3selectpk = "";
      }
    });

    watch(perk4selectlv, newVal => {
      localStorage.perk4selectlv = newVal;
      if (newVal == 0) {
        perk4selectpk.value = "";
        localStorage.perk4selectpk = "";
      }
    });

    watch(perk1selectpk, newVal => {
      localStorage.perk1selectpk = newVal;
    });

    watch(perk2selectpk, newVal => {
      localStorage.perk2selectpk = newVal;
    });

    watch(perk3selectpk, newVal => {
      localStorage.perk3selectpk = newVal;
    });

    watch(perk4selectpk, newVal => {
      localStorage.perk4selectpk = newVal;
    });

    // Killers
    watch(kperk1selectlv, newVal => {
      localStorage.kperk1selectlv = newVal;
      if (newVal == 0) {
        kperk1selectpk.value = "";
        localStorage.kperk1selectpk = "";
      }
    });

    watch(kperk2selectlv, newVal => {
      localStorage.kperk2selectlv = newVal;
      if (newVal == 0) {
        kperk2selectpk.value = "";
        localStorage.kperk2selectpk = "";
      }
    });

    watch(kperk3selectlv, newVal => {
      localStorage.kperk3selectlv = newVal;
      if (newVal == 0) {
        kperk3selectpk.value = "";
        localStorage.kperk3selectpk = "";
      }
    });

    watch(kperk4selectlv, newVal => {
      localStorage.kperk4selectlv = newVal;
      if (newVal == 0) {
        kperk4selectpk.value = "";
        localStorage.kperk4selectpk = "";
      }
    });

    watch(kperk1selectpk, newVal => {
      localStorage.kperk1selectpk = newVal;
    });

    watch(kperk2selectpk, newVal => {
      localStorage.kperk2selectpk = newVal;
    });

    watch(kperk3selectpk, newVal => {
      localStorage.kperk3selectpk = newVal;
    });

    watch(kperk4selectpk, newVal => {
      localStorage.kperk4selectpk = newVal;
    });

    onMounted(() => {
      // Survivors
      if (localStorage.perk1selectlv) {
        perk1selectlv.value = localStorage.perk1selectlv;
      }

      if (localStorage.perk2selectlv) {
        perk2selectlv.value = localStorage.perk2selectlv;
      }

      if (localStorage.perk3selectlv) {
        perk3selectlv.value = localStorage.perk3selectlv;
      }

      if (localStorage.perk4selectlv) {
        perk4selectlv.value = localStorage.perk4selectlv;
      }

      if (localStorage.perk1selectpk) {
        perk1selectpk.value = localStorage.perk1selectpk;
      }

      if (localStorage.perk2selectpk) {
        perk2selectpk.value = localStorage.perk2selectpk;
      }

      if (localStorage.perk3selectpk) {
        perk3selectpk.value = localStorage.perk3selectpk;
      }

      if (localStorage.perk4selectpk) {
        perk4selectpk.value = localStorage.perk4selectpk;
      }

      // Killers
      if (localStorage.kperk1selectlv) {
        kperk1selectlv.value = localStorage.kperk1selectlv;
      }

      if (localStorage.kperk2selectlv) {
        kperk2selectlv.value = localStorage.kperk2selectlv;
      }

      if (localStorage.kperk3selectlv) {
        kperk3selectlv.value = localStorage.kperk3selectlv;
      }

      if (localStorage.kperk4selectlv) {
        kperk4selectlv.value = localStorage.kperk4selectlv;
      }

      if (localStorage.kperk1selectpk) {
        kperk1selectpk.value = localStorage.kperk1selectpk;
      }

      if (localStorage.kperk2selectpk) {
        kperk2selectpk.value = localStorage.kperk2selectpk;
      }

      if (localStorage.kperk3selectpk) {
        kperk3selectpk.value = localStorage.kperk3selectpk;
      }

      if (localStorage.kperk4selectpk) {
        kperk4selectpk.value = localStorage.kperk4selectpk;
      }
    });

    return {
      perks,
      kperks,
      perk1selectlv,
      perk2selectlv,
      perk3selectlv,
      perk4selectlv,
      perk1selectpk,
      perk2selectpk,
      perk3selectpk,
      perk4selectpk,
      kperk1selectlv,
      kperk2selectlv,
      kperk3selectlv,
      kperk4selectlv,
      kperk1selectpk,
      kperk2selectpk,
      kperk3selectpk,
      kperk4selectpk
    };
  }
};
</script>


<style lang="scss">
.overlay {
  ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: flex;
      margin-bottom: 20px;
      .selector {
        display: flex;
        section {
          margin-right: 20px;
          &:last-child {
            margin-right: 0;
          }
        }
        h3 {
          margin-top: 0;
          margin-bottom: 10px;
        }
        .perklist {
          margin-left: auto;
          margin-right: auto;
        }
      }
    }
  }
}
</style>