<template>
<body dir="ltr" style="max-width:8.2681in;">
  <table border="0" cellspacing="0" cellpadding="0" class="ta1">
    <colgroup>
      <col width="144"/>
      <col width="222"/>
      <col width="144"/>
      <col width="222"/>
    </colgroup>
      <tr class="ro1">
        <td colspan="4" style="text-align:left;width:1.3in; " class="ce1"><p>バックポケットペイント注文用紙</p></td>
      </tr>
      <tr class="ro2">
        <td style="text-align:left;width:1.3in; " class="ce19"><p>注文日</p></td>
        <td style="text-align:left;width:2in; " class="ce24">{{ date }}</td>
        <td style="text-align:left;width:1.3in; " class="ce19"><p>品番・サイズ</p></td>
        <td style="text-align:left;width:2in; " class="ce24"> </td>
      </tr>
      <tr class="ro2">
        <td style="text-align:left;width:1.3in; " class="ce19"><p>仕上がり予定日</p></td>
        <td style="text-align:left;width:2in; " class="ce24"> </td>
        <td style="text-align:left;width:1.3in; " class="ce19"><p>受注店・担当</p></td>
        <td style="text-align:left;width:2in; " class="ce24">{{ selectedShop.display }}　・</td>
      </tr>
      <tr class="ro2">
        <td style="text-align:left;width:1.3in; " class="ce19"><p>お名前</p></td>
        <td style="text-align:right;width:2in; " class="ce24">様</td>
        <td style="text-align:left;width:1.3in; " class="ce19"><p>ペイント数</p></td>
        <td style="text-align:left;width:2in; " class="ce24">{{ paintCount }}</td>
      </tr>
      <tr class="ro3">
        <td style="text-align:left;width:1.3in; " class="ce19"><p>★お客様最後確認★</p></td>
        <td style="text-align:left;width:2in; " class="ce19"><p>ご署名</p></td>
        <td style="text-align:left;width:1.3in; " class="ce19"><p>備考</p></td>
        <td style="text-align:left;width:2in; " class="ce24"> </td>
      </tr>
      <tr class="ro4">
        <td colspan="2" style="text-align:left;width:1.3in; " class="ce4"><p>左　ポケット</p></td>
        <td colspan="2" style="text-align:left;width:1.3in; " class="ce4"><p>左　ポケット</p></td>
      </tr>
      <tr class="ro2">
        <td rowspan="2" style="text-align:left;width:1.3in; " class="ce5"><p v-if="isLayer(0,0)">１番目</p></td>
        <td rowspan="10" style="text-align:left;width:2in; " class="ce22">
          <svg v-if="isLayer(0,0)" viewBox="0 0 500 500">
            <svg-pocket :jeans="selectedJeans" :stitch="false" :sp="false" />
            <svg-pattern
              :color="pocketsStore[0][0].color.color"
              :path="pocketsStore[0][0].pattern.path"
              :icsp="pocketsStore[0][0].pattern.icsp"
            />
          </svg>
        </td>
        <td rowspan="2" style="text-align:left;width:1.3in; " class="ce5"><p v-if="isLayer(1,0)">１番目</p></td>
        <td rowspan="10" style="text-align:left;width:2in; " class="ce22">
          <svg v-if="isLayer(1,0)" viewBox="0 0 500 500">
            <svg-pocket :jeans="selectedJeans" :stitch="false" :sp="false" />
            <svg-pattern
              :color="pocketsStore[1][0].color.color"
              :path="pocketsStore[1][0].pattern.path"
              :icsp="pocketsStore[1][0].pattern.icsp"
            />
          </svg>
        </td>
      </tr>
      <tr class="ro2"/>
      <tr class="ro2">
        <td v-if="isLayer(0,0)" rowspan="8" style="text-align:left;width:1.3in; " class="ce10">
          <p class="uppercase">#{{ pocketsStore[0][0].pattern.id }}</p>
          <p><span class="T1">カラー：{{ pocketsStore[0][0].color.colorDisplay }}</span></p>
        </td>
        <td v-if="isLayer(1,0)" rowspan="8" style="text-align:left;width:1.3in; " class="ce10">
          <p class="uppercase">#{{ pocketsStore[1][0].pattern.id }}</p>
          <p><span class="T1">カラー：{{ pocketsStore[1][0].color.colorDisplay }}</span></p>
        </td>
      </tr>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2">
        <td rowspan="2" style="text-align:left;width:1.3in; " class="ce5"><p v-if="isLayer(0,1)">２番目</p></td>
        <td rowspan="10" style="text-align:left;width:2in; " class="ce22">
          <svg v-if="isLayer(0,1)" viewBox="0 0 500 500">
            <svg-pocket :jeans="selectedJeans" :stitch="false" :sp="false" />
            <svg-pattern
              :color="pocketsStore[0][1].color.color"
              :path="pocketsStore[0][1].pattern.path"
              :icsp="pocketsStore[0][1].pattern.icsp"
            />
          </svg>
        </td>
        <td rowspan="2" style="text-align:left;width:1.3in; " class="ce5"><p v-if="isLayer(1,1)">２番目</p></td>
        <td rowspan="10" style="text-align:left;width:2in; " class="ce22">
          <svg v-if="isLayer(1,1)" viewBox="0 0 500 500">
            <svg-pocket :jeans="selectedJeans" :stitch="false" :sp="false" />
            <svg-pattern
              :color="pocketsStore[1][1].color.color"
              :path="pocketsStore[1][1].pattern.path"
              :icsp="pocketsStore[1][1].pattern.icsp"
            />
          </svg>
        </td>
      </tr>
      <tr class="ro2"/>
      <tr class="ro2">
        <td v-if="isLayer(0,1)" rowspan="8" style="text-align:left;width:1.3in; " class="ce10">
          <p class="uppercase">#{{ pocketsStore[0][1].pattern.id }}</p>
          <p><span class="T1">カラー：{{ pocketsStore[0][1].color.colorDisplay }}</span></p>
        </td>
        <td v-if="isLayer(1,1)" rowspan="8" style="text-align:left;width:1.3in; " class="ce10">
          <p class="uppercase">#{{ pocketsStore[1][1].pattern.id }}</p>
          <p><span class="T1">カラー：{{ pocketsStore[1][1].color.colorDisplay }}</span></p>
        </td>
      </tr>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2">
        <td rowspan="2" style="text-align:left;width:1.3in; " class="ce5"><p v-if="isLayer(0,2)">３番目</p></td>
        <td rowspan="10" style="text-align:left;width:2in; " class="ce22">
          <svg v-if="isLayer(0,2)" viewBox="0 0 500 500">
            <svg-pocket :jeans="selectedJeans" :stitch="false" :sp="false" />
            <svg-pattern
              :color="pocketsStore[0][2].color.color"
              :path="pocketsStore[0][2].pattern.path"
              :icsp="pocketsStore[0][2].pattern.icsp"
            />
          </svg>
        </td>
        <td rowspan="2" style="text-align:left;width:1.3in; " class="ce5"><p v-if="isLayer(1,2)">３番目</p></td>
        <td rowspan="10" style="text-align:left;width:2in; " class="ce22">
          <svg v-if="isLayer(1,2)" viewBox="0 0 500 500">
            <svg-pocket :jeans="selectedJeans" :stitch="false" :sp="false" />
            <svg-pattern
              :color="pocketsStore[1][2].color.color"
              :path="pocketsStore[1][2].pattern.path"
              :icsp="pocketsStore[1][2].pattern.icsp"
            />
          </svg>
        </td>
      </tr>
      <tr class="ro2"/>
      <tr class="ro2">
        <td v-if="isLayer(0,2)" rowspan="8" style="text-align:left;width:1.3in; " class="ce10">
          <p class="uppercase">#{{ pocketsStore[0][2].pattern.id }}</p>
          <p><span class="T1">カラー：{{ pocketsStore[0][2].color.colorDisplay }}</span></p>
        </td>
        <td v-if="isLayer(1,2)" rowspan="8" style="text-align:left;width:1.3in; " class="ce10">
          <p class="uppercase">#{{ pocketsStore[1][2].pattern.id }}</p>
          <p><span class="T1">カラー：{{ pocketsStore[1][2].color.colorDisplay }}</span></p>
        </td>
      </tr>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro4">
        <td colspan="2" style="text-align:left;width:1.3in; " class="ce13"><p>左　重ねの見本</p></td>
        <td colspan="2" style="text-align:left;width:1.3in; " class="ce13"><p>右　重ねの見本</p></td>
      </tr>
      <tr class="ro2">
        <td colspan="2" rowspan="12" style="text-align:left;width:3.8in; " class="ce14">
          <svg viewBox="0 0 500 500">
            <svg-pocket
              :jeans="selectedJeans"
              :stitch="false"
              :sp="false"
            />
            <svg-pattern
              v-for="(layer, index) in pocketsStore[0]"
              :key="index"
              :color="layer.color.color"
              :path="layer.pattern.path"
              :icsp="layer.pattern.icsp"
            />
          </svg>
        </td>
        <td colspan="2" rowspan="12" style="text-align:left;width:3.8in; " class="ce14">
          <svg viewBox="0 0 500 500">
            <svg-pocket
              :jeans="selectedJeans"
              :stitch="selectedJeans.stitch"
              :sp="selectedJeans.stripes"
            />
            <svg-pattern
              v-for="(layer, index) in pocketsStore[1]"
              :key="index"
              :color="layer.color.color"
              :path="layer.pattern.path"
              :icsp="layer.pattern.icsp"
            />
          </svg>
        </td>
      </tr>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2"/>
      <tr class="ro2">
        <td style="text-align:left;width:1.3in; " class="ce15"><p>工場</p></td>
        <td style="text-align:left;width:2in; " class="ce15"><p>本社</p></td>
        <td style="text-align:left;width:1.3in; " class="ce15"><p>営業</p></td>
        <td style="text-align:left;width:2in; " class="ce30"> </td>
      </tr>
      <tr class="ro2">
        <td rowspan="2" style="text-align:left;width:1.3in; " class="ce16"> </td>
        <td rowspan="2" style="text-align:left;width:2in; " class="ce16"> </td>
        <td rowspan="2" style="text-align:left;width:1.3in; " class="ce16"> </td>
        <td style="text-align:left;width:2in; " class="ce30"> </td>
      </tr>
      <tr class="ro2">
        <td style="text-align:left;width:2in; " class="Default"> </td>
      </tr>
    </table>
</body>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import svgPattern from '~/components/svgPattern.vue';

export default {
  components: { svgPattern },
  data() {
    return {
    }
  },
  computed: {
    ...mapState('selection', ['selectedShop', 'pocketsStore']),
    ...mapGetters('selection', ['selectedJeans']),
    paintCount() {
      return this.pocketsStore[0].length + this.pocketsStore[1].length
    },
    date() {
      const date = new Date();
      return `${date.getFullYear()}　年　${date.getMonth() + 1}　月　${date.getDate()}　日`
    }
  },
  methods: {
    isLayer(x,y) {
      return this.pocketsStore[x][y]
    },
  },
  mounted: function () {
    print();
    this.$router.push('/paint');
  },
}
</script>

<style>
  table { border-collapse:collapse; border-spacing:0; empty-cells:show }
  td, th { vertical-align:top; font-size:10pt;}
  h1, h2, h3, h4, h5, h6 { clear:both;}
  p { white-space: nowrap; }
  ol, ul { margin:0; padding:0;}
  li { list-style: none; margin:0; padding:0;}
  span.footnodeNumber { padding-right:1em; }
  span.annotation_style_by_filter { font-size:95%; font-family:Arial; background-color:#fff000;  margin:0; border:0; padding:0;  }
  span.heading_numbering { margin-right: 0.8rem; }* { margin:0;}
  .ta1 { writing-mode:horizontal-tb; direction:ltr; }
  .Default { font-size:10pt; font-family:'Liberation Sans'; }
  .ce1 { font-size:20pt; font-family:'Liberation Sans'; border-bottom-style:none; background-color:#333333; color:white; border-left-width:0.0349cm; border-left-style:solid; border-left-color:#000000; border-right-width:0.0349cm; border-right-style:solid; border-right-color:#000000; border-top-width:0.0349cm; border-top-style:solid; border-top-color:#000000; vertical-align:middle; text-align:center ! important; margin-left:0in; font-weight:bold; }
  .ce10 { font-size:10pt; font-family:'Liberation Sans'; border-bottom-width:0.0133cm; border-bottom-style:solid; border-bottom-color:#000000; border-left-width:0.0133cm; border-left-style:solid; border-left-color:#000000; border-right-style:none; border-top-style:none; vertical-align:top; text-align:left ! important; margin-left:0in; }
  .ce11 { font-size:10pt; font-family:'Liberation Sans'; border-bottom-width:0.0133cm; border-bottom-style:solid; border-bottom-color:#000000; border-left-width:0.0133cm; border-left-style:solid; border-left-color:#000000; border-right-style:none; border-top-style:none; }
  .ce13 { font-size:18pt; font-family:'Liberation Sans'; border-bottom-style:none; border-left-width:0.0133cm; border-left-style:solid; border-left-color:#000000; border-right-width:0.0133cm; border-right-style:solid; border-right-color:#000000; border-top-width:0.0133cm; border-top-style:solid; border-top-color:#000000; text-align:center ! important; margin-left:0in; color:#c9211e; font-weight:bold; }
  .ce14 { font-size:10pt; font-family:'Liberation Sans'; border-bottom-width:0.0133cm; border-bottom-style:solid; border-bottom-color:#000000; border-left-width:0.0133cm; border-left-style:solid; border-left-color:#000000; border-right-width:0.0133cm; border-right-style:solid; border-right-color:#000000; border-top-style:none; vertical-align:middle; text-align:center ! important; }
  .ce15 { font-size:10pt; font-family:'Liberation Sans'; border-top-width:0.0133cm; border-top-style:solid; border-top-color:#000000; border-left-width:0.0133cm; border-left-style:solid; border-left-color:#000000; border-bottom-width:0.0133cm; border-bottom-style:solid; border-bottom-color:#000000; border-right-width:0.0133cm; border-right-style:solid; border-right-color:#000000; vertical-align:middle; text-align:center ! important; margin-left:0in; }
  .ce16 { font-size:10pt; font-family:'Liberation Sans'; border-top-width:0.0133cm; border-top-style:solid; border-top-color:#000000; border-left-width:0.0133cm; border-left-style:solid; border-left-color:#000000; border-bottom-width:0.0133cm; border-bottom-style:solid; border-bottom-color:#000000; border-right-width:0.0133cm; border-right-style:solid; border-right-color:#000000; vertical-align:middle; text-align:center ! important; }
  .ce17 { font-size:10pt; font-family:'Liberation Sans'; border-top-width:0.0133cm; border-top-style:solid; border-top-color:#000000; border-left-width:0.0133cm; border-left-style:solid; border-left-color:#000000; border-bottom-width:0.0133cm; border-bottom-style:solid; border-bottom-color:#000000; border-right-width:0.0133cm; border-right-style:solid; border-right-color:#000000; }
  .ce19 { font-size:10pt; font-family:'Liberation Sans'; border-top-width:0.0133cm; border-top-style:solid; border-top-color:#000000; border-left-width:0.0133cm; border-left-style:solid; border-left-color:#000000; border-bottom-width:0.0133cm; border-bottom-style:solid; border-bottom-color:#000000; border-right-width:0.0133cm; border-right-style:solid; border-right-color:#000000; vertical-align:middle; }
  .ce21 { font-size:10pt; font-family:'Liberation Sans'; border-bottom-width:0.0133cm; border-bottom-style:solid; border-bottom-color:#000000; border-left-style:none; border-right-width:0.0133cm; border-right-style:solid; border-right-color:#000000; border-top-width:0.0133cm; border-top-style:solid; border-top-color:#000000; }
  .ce22 { font-size:18pt; font-family:'Liberation Sans'; border-bottom-width:0.0133cm; border-bottom-style:solid; border-bottom-color:#000000; border-left-style:none; border-right-width:0.0133cm; border-right-style:solid; border-right-color:#000000; border-top-width:0.0133cm; border-top-style:solid; border-top-color:#000000; vertical-align:middle; text-align:center ! important; margin-left:0in; color:#c9211e; }
  .ce23 { font-size:10pt; font-family:'Liberation Sans'; border-bottom-style:none; border-left-style:none; border-right-style:none; border-top-width:0.0349cm; border-top-style:solid; border-top-color:#000000; }
  .ce24 { font-size:10pt; font-family:'Liberation Sans'; border-top-width:0.0133cm; border-top-style:solid; border-top-color:#000000; border-left-width:0.0133cm; border-left-style:solid; border-left-color:#000000; border-bottom-width:0.0133cm; border-bottom-style:solid; border-bottom-color:#000000; border-right-width:0.0133cm; border-right-style:solid; border-right-color:#000000; }
  .ce25 { font-size:10pt; font-family:'Liberation Sans'; border-bottom-style:none; border-left-style:none; border-right-width:0.0133cm; border-right-style:solid; border-right-color:#000000; border-top-style:none; }
  .ce26 { font-size:10pt; font-family:'Liberation Sans'; border-bottom-style:none; border-left-style:none; border-right-width:0.0349cm; border-right-style:solid; border-right-color:#000000; border-top-width:0.0349cm; border-top-style:solid; border-top-color:#000000; }
  .ce27 { font-size:10pt; font-family:'Liberation Sans'; border-bottom-width:0.0133cm; border-bottom-style:solid; border-bottom-color:#000000; border-left-style:none; border-right-width:0.0133cm; border-right-style:solid; border-right-color:#000000; border-top-style:none; }
  .ce28 { font-size:10pt; font-family:'Liberation Sans'; border-bottom-style:none; border-left-style:none; border-right-width:0.0133cm; border-right-style:solid; border-right-color:#000000; border-top-width:0.0133cm; border-top-style:solid; border-top-color:#000000; }
  .ce30 { font-size:10pt; font-family:'Liberation Sans'; border-top-style:none; border-left-style:none; border-bottom-style:none; border-right-style:none; }
  .ce4 { font-size:18pt; font-family:'Liberation Sans'; border-top-width:0.0133cm; border-top-style:solid; border-top-color:#000000; border-left-width:0.0133cm; border-left-style:solid; border-left-color:#000000; border-bottom-width:0.0133cm; border-bottom-style:solid; border-bottom-color:#000000; border-right-width:0.0133cm; border-right-style:solid; border-right-color:#000000; vertical-align:middle; text-align:center ! important; margin-left:0in; color:#c9211e; }
  .ce5 { font-size:18pt; font-family:'Liberation Sans'; border-bottom-style:none; border-left-width:0.0133cm; border-left-style:solid; border-left-color:#000000; border-right-style:none; border-top-width:0.0133cm; border-top-style:solid; border-top-color:#000000; vertical-align:middle; text-align:left ! important; margin-left:0in; color:#c9211e; font-style:normal; text-shadow:none; text-decoration:none ! important; font-weight:normal; }
  .ce9 { font-size:10pt; font-family:'Liberation Sans'; border-bottom-style:none; border-left-width:0.0133cm; border-left-style:solid; border-left-color:#000000; border-right-style:none; border-top-style:none; }
  .co1 { width:1.3in; }
  .co2 { width:2in; }
  .ro1 { height:0.4146in; }
  .ro2 { height:0.178in; }
  .ro3 { height:0.3728in; }
  .ro4 { height:0.3063in; }
  .T1 { font-family:'Liberation Sans'; font-size:10pt; font-weight:normal; text-decoration:none ! important; font-style:normal; text-shadow:none; }
  /* ODF styles with no properties representable as CSS:
    { } */

  svg { 
    padding: 1mm;
    width: inherit;
    max-height: 50mm;
    margin: auto;
  }
</style>